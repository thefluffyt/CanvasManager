import React from 'react'

import { TabGroup } from './TabGroup';

import '../styles/header.css'

export function Header()
{
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <TabGroup types={["Home", "Courses", "Grades", "Communications", "Calendar", "Settings"]}/>
        </header>
    )
}

export default Header