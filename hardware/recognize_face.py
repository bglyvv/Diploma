import io
import json
import requests
from PIL import Image
import face_recognition
import os
import cv2
import websocket
import threading
import json
from flask import Flask, request

app = Flask(__name__)
known_faces = []
known_face_names = []
url = "ws://192.168.31.188:5001/attendancehub"
ws = websocket.WebSocket()
ws.connect(url)
@app.route('/', methods=['POST'])
def recognize_faces():

    image = face_recognition.load_image_file(io.BytesIO(request.files['image'].read()))
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)

    face_names = []
    for face_encoding in face_encodings:
        # See if the face is a match for the known faces
        matches = face_recognition.compare_faces(known_faces, face_encoding)
        name = "Unknown"

        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]
            with open('result.txt','a') as f:
                f.write('\n'+name)
        else :
            with open('results.txt','a') as f:
                f.write('\n Unknown')
        message_to_send = {
            'type': 3,  # Invoke a method
            'target': 'TurnstileStatus',  # Name of the method to invoke
            'arguments': str(name).strip() # Method arguments
        }
        ws.send(json.dumps(message_to_send))
        face_names.append(name)
    return json.dumps(face_names)

if __name__ == '__main__':
    for filename in os.listdir('dataset'):
        if filename.endswith('.jpg'):
            name = filename.split('.')[0]
            image = face_recognition.load_image_file(os.path.join('dataset', filename))
            encoding = face_recognition.face_encodings(image)[0]
            known_faces.append(encoding)
            known_face_names.append(name)

    # Start Flask app
    app.run(host='0.0.0.0', port=8000, debug=True)









    






