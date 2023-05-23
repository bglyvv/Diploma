import cv2
import requests
import numpy as np
from picamera.array import PiRGBArray
from picamera import PiCamera
import uuid

# Initialize the PiCamera object
camera = PiCamera()

# Set the resolution of the camera
camera.resolution = (640, 480)

# Set the number of frames per second
camera.framerate = 30

# Initialize the OpenCV face detector
face_detector = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')

# Set the URL of the API endpoint
url = 'http://192.168.31.188:8000/'

# Start a continuous capture from the camera
with PiRGBArray(camera, size=camera.resolution) as stream:
    for frame in camera.capture_continuous(stream, format='bgr', use_video_port=True):
        # Read the current frame from the camera
        img = frame.array

        # Convert the image to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Detect faces in the image
        faces = face_detector.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

        # Draw bounding boxes around the detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

        # Display the image on the screen
        cv2.imshow('Image', img)

        # Check for key press
        if cv2.waitKey(1) == ord('q'):
            break

        # Post the image to the server
        with open('image.jpg', 'wb') as file:
            #guid = str(uuid.uuid4())
            cv2.imwrite('image.jpg', img)

        with open('image.jpg', 'rb') as file:
            image_data = file.read()
            data = {'image': image_data}
            print(image_data)
            #headers = {'Content-Type': 'image/jpeg'}
            response = requests.post(url, files=data)
        
        
        
        

        print(response.text)

        # Clear the stream in preparation for the next frame
        stream.seek(0)
        stream.truncate()

# Clean up the camera and close the window
cv2.destroyAllWindows()
camera.close()
