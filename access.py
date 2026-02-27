import requests
import json
import settings

url = "https://canvas.instructure.com/api/v1/courses"
headers = {"Authorization": f"Bearer {settings.GetSetting("CANVAS_TOKEN")}"}

def Access(request: str, method:str = "GET"):
    try:
        print(headers)
        return requests.request(url=(url + request), method=method, headers=headers, timeout=10)
    except requests.exceptions.RequestException as e:
        print(e)
