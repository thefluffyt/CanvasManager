import React, {useState} from 'react'
import styled from 'styled-components' 
import Button from "./Button"

const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({ active }) =>
        active && `opacity: 1;`}
`;

function ToggleGroup({types})
{
    const [active, setActive] = useState(types[0]);
    return (
        <>
            <div>
                {types.map((type)=> (
                    <ButtonToggle active={active === type} onClick={() => setActive(type)}>{type}</ButtonToggle>
                ))}
            </div>
        </>
    );
}