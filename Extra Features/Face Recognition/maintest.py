import cv2
import os
import pickle
import argparse
from ultralytics import YOLO
import supervision as sv
import numpy as np
import time

cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

imgBackground = cv2.imread("Resources/background.png")

#Importing the mode images into a list
folderModePath = "Resources/Modes"
modePathList = os.listdir(folderModePath)
imgModeList = []
for path in modePathList:
    imgModeList.append(cv2.imread(os.path.join(folderModePath, path)))

    
#Load the encoding file
print("Loadnig Encode File ...")
file = open("EncodeFile.p", 'rb')
encodeListKnownWithIDs = pickle.load(file)
file.close()
encodeListKnown, studentIds = encodeListKnownWithIDs
# print(studentIds)
print("Encode File Loaded")


while True:
    ret, frame = cap.read() #ret = return = variable to check if camera is returning any footage
    
    
    imgS = cv2.resize(frame, (0,0), None, 0.25, 0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)
    
    
    imgBackground[162:162+480,55:55+640] = frame
    imgBackground[44:44+633,808:808+414] = imgModeList[0]
    
    # cv2.imshow("Webcam", frame)
    cv2.imshow("Face Attendance", imgBackground)
    if cv2.waitKey(1) == 27 or cv2.getWindowProperty("Face Attendance", cv2.WND_PROP_VISIBLE) < 1:
            break
