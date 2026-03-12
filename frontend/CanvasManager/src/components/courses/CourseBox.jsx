import React from 'react'
import { useApi } from '../../APIHandler'

function CourseBox ({filters})
{   
    const { data, loading, error } = useApi("/courses");

    if (loading) return <p>Loading courses…</p>;
    if (error) return <p>Error: {error.message}</p>;

    const jObjects = data?.result ?? []; 
    const orgs = jObjects.filter(course => course.name?.startsWith("ORG"));

    var courses = jObjects.filter(course => course.name.startsWith("2"));
    const prefixMap = new Map()

    for (const course of courses) {
      const slice = course.name?.slice(0, 8);
      if (!prefixMap.has(slice)) {
        prefixMap.set(slice, []);
      }

      prefixMap.get(slice).push(course);
    }

    const orderedPrefixes = [...prefixMap.keys()].sort((a, b) => a - b).reverse(); //Orders alphabetially
    for (const prefix of orderedPrefixes)
    {
        
    }
    

    return (
      <div>
        <p>Courses</p>
        <ul>
          {courses.map(course => (
              <li key={course.id}>{course.name}</li>
          ))}
        </ul>
        <p>Organisiations</p>
        <ul>
            {orgs.map(org => (
                <li key={org.id}>{org.name}</li>
            ))}
        </ul>
      </div>
    );

    /**
     * Needs to be in date order but then name order
     * Split into arrays for each course inital 8 chars "202x-HSx"
     * Sort arrays reverse alphabetical
     * Sort elements of each array alphabetically
     * Add orgs at the bottom
     */
}

export default CourseBox