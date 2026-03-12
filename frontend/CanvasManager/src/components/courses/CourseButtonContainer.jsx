import React from 'react'

function CourseButtonContainer({courses, name})
{
    return (
        <div>
            <h3>{name}</h3>
            {courses.map(course => (
              <p key={course.id}>{course.name.substring(9).replace('-', ": ")}</p>
          ))}
        </div>
    )
}

export default CourseButtonContainer()