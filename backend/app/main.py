from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore

import random

from app.routers import courses as courses_router

import app.canvaslms as canvaslms

api = FastAPI(title = "Canvas Manager API", version = "0.0.1")

api.include_router(courses_router.router)

origins = [
    "http://localhost:5173",
    "http://localhost:8000"
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@api.get("/api/hello")
def Hello():
    return {"result": {
        "m1": "Backend is working",
        "m2": "That's crazy it sends objects too"
    }}

@api.get("/api/randNums")
def RandNums(num:int = 1, min:int = 0, max:int = 10):
    nums = []
    for _ in range(num):
        nums.append(random.randint(min, max))

    return {"result": nums}

@api.get("/api/courses")
def GET_Courses():
    courseList = []
    courseJson = canvaslms.GET_COURSES()
    for course in courseJson:
        courseList.append(course["name"])
    
    return {"result": courseList}