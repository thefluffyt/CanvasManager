import React from 'react'
import { useApi } from '../../APIHandler'

import CourseButtonContainer from './CourseButtonContainer';

function CourseBox ({filters})
{   
    const { data, loading, error } = useApi("/courses");

    if (loading) return <p>Loading courses…</p>;
    if (error) return <p>Error: {error.message}</p>;

    const jObjects = data?.result ?? []; 
    const orgs = jObjects.filter(course => course.name?.startsWith("ORG"));

    const courses = [...jObjects].filter(course => course.name.startsWith("2")).reverse();
    const prefixMap = new Map();
    var orderedCourses = [];

    for (const course of courses) {
      const slice = course.name.slice(0, 8);
      if (!prefixMap.has(slice)) {
        prefixMap.set(slice, []);
      }

      prefixMap.get(slice).push(course);
    }

    for (const prefix of prefixMap.keys())
    {
      var mapCourses = prefixMap.get(prefix);

      mapCourses.map(course => console.log(course.name.substring(9, 17)));
      mapCourses.sort((a, b) => a.name.substring(9, 17).localeCompare(b.name.substring(9, 17)));
      mapCourses.map(course => console.log(course.name.substring(9, 17) + "!"));

      mapCourses.map(course => (orderedCourses.push(course)));
    }

    return (
      <div>
        <CourseButtonContainer courses={orderedCourses} name="Courses"/>
        <CourseButtonContainer courses={orgs} name="Organisations"/>
      </div>
    );
}

export default CourseBox