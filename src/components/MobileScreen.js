import React, { Fragment } from 'react'
import styled from 'styled-components'
import MailCard from './MailCard'
import TimeIntervalItem from './TimeIntervalItem'
import Data from '../mockData.json'

const LetterContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    grid-template-rows: 460px;
    transform: translateX(${props => props.position}px);
    transition: all 0.5s;
`

const IndicatorContainer = styled.div`
margin: 0 10px;
    display: flex;
    align-items: stretch;`


const MobileScreen = props => {
    const mail = Data.mail.map(letter => (
        <MailCard
            data={letter}
            key={letter.body}
            scrollable={props.scrollable}
        />

        ))
            const indicators = Data.mail.map(letter => (
                <TimeIntervalItem key={letter.author} />
            ))
    return (
        <Fragment>
            <IndicatorContainer>
                {indicators}
            </IndicatorContainer>
            <LetterContainer id="container" position={props.position}>
                {mail}
            </LetterContainer>
        </Fragment>
    )
}

export default MobileScreen
