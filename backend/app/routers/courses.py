from fastapi import APIRouter, HTTPException, status #type: ignore
from typing import List, Optional
from app.services.courses_service import (
    list_courses, get_courses
)

import app.canvaslms as canvaslms

router = APIRouter(
    prefix="/api/courses",
    tags=["courses"],
)

@router.get("/")
async def Get_Courses():
    return await get_courses()