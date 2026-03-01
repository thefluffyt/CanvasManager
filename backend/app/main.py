from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/hello")
def Hello():
    return {"result": {
        "m1": "Backend is working",
        "m2": "That's crazy it sends objects too"
    }}

@app.get("/api/randNums")
def RandNums(num:int = 1, min:int = 0, max:int = 10):
    nums = []
    for _ in range(num):
        nums.append(random.randint(min, max))

    return {"result": nums}