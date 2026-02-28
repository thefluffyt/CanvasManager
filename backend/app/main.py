from fastapi import FastAPI

app = FastAPI()

@app.get("/api/hello")
def Hello():
    return {"message": "Backend is working!"}