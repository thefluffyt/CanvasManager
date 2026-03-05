from fastapi import APIRouter, HTTPException, status #type: ignore
from typing import List, Optional
from app.services.courses_service import (
    list_courses, get_course
)

router = APIRouter(
    prefix="/courses",
    tags="courses",

)