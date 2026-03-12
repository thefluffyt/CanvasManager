import React from 'react'

import '../../styles/courses.css'

function CourseButtonContainer({courses, name})
{
    return (
        <div className="course-btn-cnt">
            <h3>{name}</h3>
            {courses.map(course => (
              <p key={course.id}>{course.name.substring(9).replace('-', ": ")}</p>
          ))}
        </div>
    )
}

export default CourseButtonContainer