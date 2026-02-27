import requests
import json
import settings

url = "https://swinburne.instructure.com/api/v1"
headers = {"Authorization": f"Bearer {settings.GetSetting("CANVAS_TOKEN")}"}

def Get_Request(request: str, method:str = "GET"):
    if request.startswith('/') == False:
        request = '/' + request
    try:
        result = requests.request(url=(url + request), method=method, headers=headers, timeout=10)
        print (result.status_code)
        jObject = result.json()
        
        with open("Output/output.json", 'w') as output:
            output.write(json.dumps(jObject))

        return jObject
    except requests.exceptions.RequestException as e:
        print(e)
