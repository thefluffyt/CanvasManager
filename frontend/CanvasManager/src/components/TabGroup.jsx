import React, {useState} from 'react'
import styled from "styled-components"

import {GetActiveTab} from './TabSwitch'

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ $active }) =>
    $active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

export function TabGroup({types})
{
    const activeType = GetActiveTab();

    const [active, setActive] = useState(activeType);
    return (
        <>
            <div>
                {types.map((type) => {
                        if (type == "Home")
                        {
                            return <a href={("/")} key={type}><Tab  $active={active === type} onClick={() => setActive(type)}>{type}</Tab></a>
                        } else {
                            return <a href={("/"+ type)} key={type}><Tab  $active={active === type} onClick={() => setActive(type)}>{type}</Tab></a>
                        }
                })}
            </div>
        </>
    );
}

