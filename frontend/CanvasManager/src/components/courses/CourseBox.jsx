import React from 'react'
import { Get_API } from '../../APIHandler'

function CourseBox ({filters})
{

    const courseData = Get_API("/courses")
    console.log(courseData.result)
    return (<div><p>{courseData.result}</p></div>)
}

export default CourseBox