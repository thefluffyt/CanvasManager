import app.canvaslms as canvaslms

async def list_courses():
    courseList = []
    courseJson = canvaslms.GET_Canvas(endpoint="/courses/")
    for course in courseJson:
        name = course["name"]
        if (course["enrollment_term_id"] != 1):
            courseList.append(name)
            
    
    return {"result": courseList}

async def get_courses():
    courseJson = canvaslms.GET_Canvas(endpoint="/courses/")
    
    return {"result": courseJson}

async def get_course():
    return