import requests
import json
import settings

url = "https://swinburne.instructure.com/api/v1"
headers = {"Authorization": f"Bearer {settings.GetSetting("CANVAS_TOKEN")}"}

def GetClasses():
    return Get_Request("/users/self/courses")

def Get_Request(request: str, params = {}):
    if request.startswith('/') == False:
        request = '/' + request
    
    endpoint = url + request
    items:list[dict] = []
    first:bool = True

    while endpoint:
        result = requests.request(url=endpoint, method="GET", headers=headers, params=params if first else None, timeout=10)
        result.raise_for_status()

        items.extend(result.json())

        link = result.headers.get("Link", "")
        nextEndpoint = None

        if link:
            for part in (p.strip() for p in link.split(",") if p.strip()):
                            if 'rel="next"' in part:
                                i = part.find("<") + 1
                                j = part.find(">", i)
                                if 0 < i < j:
                                    nextEndpoint = part[i:j]
                                    break
        endpoint = nextEndpoint
        first = False
 
    with open("Output/output.json", 'w') as output:
        output.write(json.dumps(items))
        return items