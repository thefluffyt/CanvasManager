import json
import access
import settings

def GetCurrentClasses():
    classes = []

    with open("Output/output.json", 'r') as f:
        data = json.load(f)

    for course in data:
        name = course["name"]
        if name[0:4] == settings.GetSetting("YEAR") and name[7] == settings.GetSetting("TERM"):
            classes.append(course)

    with open("Output/filteredOutput.json", 'w') as f:
        f.write(json.dumps(classes))
    
    return classes


    