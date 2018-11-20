import React, { Component } from 'react'
import styled from 'styled-components'
import MobileScreen from './components/MobileScreen.js'

const AppDiv = styled.div`
    text-align: center;
    border: 1px solid #858585;
    width: 320px;
    height: 550px;
    margin: auto;
`

class App extends Component {
    render() {
        return (
            <AppDiv>
                <MobileScreen />
            </AppDiv>
        )
    }
}

export default App
