# CanvasGradeChecker
Scripts to access the CanvasLMS RestAPI to get grades and output them to an xlsx file.

Please create a folder in the same folder as the python scripts titled Config. Inside this folder there should be a file "appsettings.json" this should contain a json object:
{
    "CANVAS_TOKEN": "YOUR_TOKEN_GOES_HERE"
}

Without this the scripts will not be able to access the CanvasLMS RestAPI and the program will not work.