import requests
import json
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()
url = "http://192.168.31.170:5001/api/account/card/"
status = False
try:
    while (status == False):
    # Writing data to card
        text = input('Enter student id: ')
        print("Now place card to write data")
        reader.write(text)
        cardId,studentId = reader.read()

        # Printing written data
        print("Unique card Id: ",cardId)
        print("Student Id: "+studentId)

        # Preparing object to post api
        headers = {"Content-Type":"application/json"}
        data={"studentId":str(studentId).strip(),"cardId":str(cardId).strip()}
        json_data = json.dumps(data)
        
        # Posting
        response = requests.post(url,data=json_data,headers=headers)
        print(response)
        if(response.status_code == 200):
            print("Done")
            status = True


finally:
    GPIO.cleanup()
