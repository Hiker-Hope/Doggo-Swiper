import React, { Component } from 'react'
import styled from 'styled-components'
import MobileScreen from './components/MobileScreen.js'

const AppDiv = styled.div`
    text-align: center;
`

class App extends Component {
    render() {
        return (
            <AppDiv>
                <h1>I'm a mobile phone</h1>
                <MobileScreen />
            </AppDiv>
        )
    }
}

export default App
