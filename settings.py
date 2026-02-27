import json

with open("Config/appsettings.json") as file:
    settings = json.load(file)

def GetSetting(fieldPath: str):
    result = settings
    chunks = fieldPath.split('/')
    for chunk in chunks:
        result = result[chunk]
    
    return result