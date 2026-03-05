import React from 'react'

import RandNums from './RandNums'
import CourseBox from './courses/courseBox';

export function TabSwitch({})
{
    const tab = GetActiveTab();
    console.log(tab);
    var tabContents = (<></>) //TODO: Add tabContents behaviour if the active tab is not one of the below
    switch(tab)
    {
        case "Home": //Home and default tab
            tabContents = (<><RandNums num={3}min={0}max={5}/></>)
            break;
        case "Courses":
            tabContents = (<><CourseBox/></>)
            break;
        case "Calendar":
            break;
        case "Grades":
            break;
        case "Communications":
            break;
        case "Settings":
            break;
    }

    return tabContents;
}

export function GetActiveTab()
{
    const tab = window.location.pathname.replace('/', '').split('/')[0];
    if (tab !== "")
    {
        return tab;
    }

    return "Home";
}