import React, { Component } from 'react'
import styled from 'styled-components'
import MobileScreen from './components/MobileScreen.js'

const AppDiv = styled.div`
    overflow-x: hidden;
    text-align: center;
    border: 1px solid #858585;
    width: 320px;
    height: 580px;
    margin: auto;
`

class App extends Component {
    state = {
        isOpen: false,
        posX: 0
    }

    componentDidMount = () => {
        this.autoSwipe = setInterval(() => this.swipeRight(), 2500)
    }

    handleClick = event => {
        clearInterval(this.autoSwipe)
        this.autoSwipe = setInterval(() => this.swipeRight(), 2500)

        event.clientY > document.getElementById('root').clientHeight / 2
            ? this.openLetter()
            : event.clientX > document.getElementById('root').clientWidth / 2
            ? this.swipeRight()
            : this.swipeLeft()
    }

    swipeRight = () => {
        if (
            document.getElementById('container').scrollWidth +
                this.state.posX -
                320 >
            0
        ) {
            this.setState(prevState => ({
                posX: prevState.posX - 320,
                isOpen: false
            }))
        }
    }

    swipeLeft = () => {
        if (this.state.posX < 0) {
            this.setState(prevState => ({
                posX: prevState.posX + 320,
                isOpen: false
            }))
        }
    }

    openLetter = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
        clearInterval(this.autoSwipe)
    }

    render() {
        return (
            <AppDiv
                onClick={this.handleClick}
                overflowY={this.state.isOpen ? 'scroll' : 'hidden'}
            >
                <MobileScreen
                    position={this.state.posX}
                    scrollable={this.state.isOpen}
                    handler={this.openLetter}
                />
            </AppDiv>
        )
    }
}

export default App
