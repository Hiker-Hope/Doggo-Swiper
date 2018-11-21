import React from 'react'
import styled from 'styled-components'
import './animation.css'

const Container = styled.div`
    margin: 0 5px;
    flex: 1;
    border-radius: 3.5px;
    height: 7px;
    background: linear-gradient(to left, gray 50%, orange 50%);
    background-size: 200% 100%;
    animation-name: indicator;
    animation-duration: 2s;
`

const TimeIntervalItem = () => {
    return <Container />
}

export default TimeIntervalItem
