import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import MailCard from './MailCard'
import Data from '../mockData.json'

const Container = styled.div`
    overflow: scroll;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
`

const mail = Data.mail.map(letter => (
    <MailCard data={letter} key={letter.body} />
))

class MobileScreen extends Component {
    handleClick = event => {
        event.clientY > document.getElementById('root').clientHeight / 2
            ? this.openLetter()
            : event.clientX > document.getElementById('root').clientWidth / 2
                ? this.swipeRight()
                : this.swipeLeft()
    }

    swipeRight = () => {
        console.log('right')
    }

    swipeLeft = () => {
        console.log('left')
    }

    openLetter = () => {
        console.log('open')
    }

    render() {
        return (
            <Fragment>
                <h1>Sorta view-indicators</h1>
                <Container onClick={this.handleClick}>{mail}</Container>
            </Fragment>
        )
    }
}

export default MobileScreen
