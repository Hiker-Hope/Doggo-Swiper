import React, { Fragment } from 'react'
import styled from 'styled-components'
import MailCard from './MailCard'
import Data from '../mockData.json'

const Container = styled.div`
    overflow: scroll;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;

    &:hover {
        box-shadow: 2px 2px 6px 0 #333333;
    }
`

const mail = Data.mail.map(letter => (
    <MailCard data={letter} key={letter.body} />
))

const MobileScreen = () => {
    return (
        <Fragment>
            <h1>Sorta view-indicators</h1>
            <Container>{mail}</Container>
        </Fragment>
    )
}

export default MobileScreen
