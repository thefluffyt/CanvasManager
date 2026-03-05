import app.canvaslms as canvaslms

async def list_courses():
    courseList = []
    courseJson = canvaslms.GET_Canvas()
    for course in courseJson:
        courseList.append(course["name"])
    
    return {"result": courseList}

async def get_course():
    return