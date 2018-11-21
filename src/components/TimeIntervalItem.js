import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 2px;
    flex: 1;
    border-radius: 3.5px;
    height: 7px;

    background: linear-gradient(to left, gray 50%, orange 50%);
    background-size: 200% 100%;
    background-position:right bottom;
    margin-left:10px;
    transition:all 2s linear;

    &:hover {
        background-position:left bottom;
    }
`

const TimeIntervalItem = props => {
    return (
        <Container />
    )
}

export default TimeIntervalItem
