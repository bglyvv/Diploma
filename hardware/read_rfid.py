


import requests
import json
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import websocket
import threading
import json

reader = SimpleMFRC522()
url = "ws://192.168.31.170:5001/attendancehub"
ws = websocket.WebSocket()

# Connect to the server
ws.connect(url)


try:
    # Reading data from card
    print("Touch your card to the reader:")
    cardId,studentId = reader.read()

    # Printing read data
    print("Unique card Id: ",cardId)
    print("Student Id: "+studentId)

    # Preparing object to post api
    headers = {"Content-Type":"application/json"}
    data={"studentId":str(studentId).strip()}
    json_data = json.dumps(data)
    
    # Posting
    message_to_send = {
        'type': 3,  # Invoke a method
        'target': 'TurnstileStatus',  # Name of the method to invoke
        'arguments': str(studentId).strip() # Method arguments
    }
    ws.send(json.dumps(message_to_send))
    # response = requests.post(url,data=json_data,headers=headers)
    #print(response)
    # if(response.status_code == 200):
    print("Done")


finally:
    GPIO.cleanup()



