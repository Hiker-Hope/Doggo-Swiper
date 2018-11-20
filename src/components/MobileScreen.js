import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 320px;
height: 500px;
margin: auto; 
    border: 1px solid #858585;

    &:hover {
        box-shadow: 2px 2px 6px 0 #333333;
    }
`

const MobileScreen = () => {
    return <Container />
}

export default MobileScreen
