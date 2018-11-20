import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import MailCard from './MailCard'
import Data from '../mockData.json'

const Container = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    transform: translateX(${props => props.position}px);
`

const mail = Data.mail.map(letter => (
    <MailCard data={letter} key={letter.body} />
))
class MobileScreen extends Component {
    state = {
        isOpen: false,
        posX: 0
    }

    handleClick = event => {
        event.clientY > document.getElementById('root').clientHeight / 2
            ? this.openLetter()
            : event.clientX > document.getElementById('root').clientWidth / 2
            ? this.swipeRight()
            : this.swipeLeft()
    }

    swipeRight = () => {
        if (document.getElementById('container').scrollWidth + this.state.posX - 320 > 0) {
            this.setState(prevState => ({
                posX: prevState.posX - 320
            }))
        }
    }

    swipeLeft = () => {
        if (this.state.posX < 0) {
            this.setState(prevState => ({
                posX: prevState.posX + 320
            }))
        }
    }

    openLetter = () => {
        console.log('open')
    }

    render() {
        return (
            <Fragment>
                <h1>Sorta view-indicators</h1>
                <Container
                    id="container"
                    onClick={this.handleClick}
                    position={this.state.posX}
                    fullScreen={this.state.isOpen}
                >
                    {mail}
                </Container>
            </Fragment>
        )
    }
}

export default MobileScreen
