import React from 'react'
import styled from 'styled-components'
import TimeIntervalItem from './TimeIntervalItem'

const Container = styled.div`
    margin: 0;
    display: flex;
    align-items: stretch;
`

const TimeIntervals = props => {
    const intervalsList = Array.from(Array(props.itemsCount), (e, i) => {
        return <TimeIntervalItem key={ i }/>
    })

    return (
        <Container>
            { intervalsList }
        </ Container>
    )
}

export default TimeIntervals
