import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 5px;
    flex: 1;
    border-radius: 3.5px;
    height: 7px;

    background: linear-gradient(to left, gray 50%, orange 50%);
    background-size: 200% 100%;
    background-position: ${props => props.animated ? "left bottom": "right bottom"};
    transition: all 2s linear;
`

const TimeIntervalItem = props => {
    return (
        <Container animated={ props.animated }/>
    )
}

export default TimeIntervalItem
