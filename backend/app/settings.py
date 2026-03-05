from pathlib import Path
import json
import os

CONFIG_PATH = Path(__file__).resolve().parent.parent / "Config" / "appsettings.json"

def GET_Setting(setting):
    with open(CONFIG_PATH, 'r') as f:
        path = setting.split('/')
        jObj = json.load(f)
        for field in path:
            jObj = jObj[field]

    return jObj