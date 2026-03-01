import React from 'react'
import '../styles/header.css'

function Header()
{
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/overview">Overview</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/communications">Communications</a></li>
                    <li><a href="/calendar">Calendar</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header