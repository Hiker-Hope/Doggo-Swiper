import React, { Fragment } from 'react'
import styled from 'styled-components'
import MailCard from './MailCard'
import TimeIntervals from './TimeIntervals'
import Data from '../mockData.json'

const Container = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    grid-template-rows: 460px;
    transform: translateX(${props => props.position}px);
    transition: all 0.5s;
`

const MobileScreen = props => {
    const mail = Data.mail.map(letter => (
        <MailCard
            data={letter}
            key={letter.body}
            onClick={props.scrollable ? props.handler : undefined}
            scrollable={props.scrollable}
        />
    ))
    return (
        <Fragment>
            <h1>Sorta view-indicators</h1>
            <TimeIntervals itemsCount={ Data.mail.length } />
            <Container id="container" position={props.position}>
                {mail}
            </Container>
        </Fragment>
    )
}

export default MobileScreen
