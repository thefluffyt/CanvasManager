import requests
import app.settings as settings

base_url = "https://swinburne.instructure.com"
code = settings.GET_Setting("CANVASLMS_CODE")

headers = {
    "Authorization": f"Bearer {code}"
}


def IteratePages(url, headers, params=None, timeout=30):
    next_url = url
    while next_url:
        resp = requests.get(next_url, headers=headers, params=params, timeout=timeout)
        resp.raise_for_status()
        yield resp.json()

        next_link = resp.links.get('next', {})
        next_url = next_link.get('url')
        params = None


def GET_Canvas(*, params=None, timeout=10, endpoint:str):
    if endpoint.startswith('/'): endpoint.removeprefix('/')
    url =f"{base_url}/api/v1/{endpoint}"
    allItems = []
    for page in IteratePages(url, headers, params=params, timeout=timeout):
        allItems.extend(page)
    return allItems

