import cv2
import face_recognition
import pickle
import os 

#Importing student images
folderPath = "Images"
pathList = os.listdir(folderPath)
print(pathList)
imgList = []
studentIds = []
for path in pathList:
    imgList.append(cv2.imread(os.path.join(folderPath, path)))
    studentIds.append(os.path.splitext(path)[0]) #this splits the id from the .png and puts it into a list and then appends the first element of that list (which is the id) to the studentids list
    
print(studentIds)



def findEncodings(imagesList):
    encodeList = []
    for img in imagesList:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    
    return encodeList

print("Encoding Started ...")
encodeListKnown = findEncodings(imgList)
encodeListKnownWithIDs = [encodeListKnown, studentIds]
print("Encoding Complete")
    
file = open("EncodeFile.p",'wb')
pickle.dump(encodeListKnownWithIDs, file)
file.close()
print("File Saved")
