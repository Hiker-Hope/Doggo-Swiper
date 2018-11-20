import React from 'react'
import styled from 'styled-components'
import DoggoCard from './DoggoCard'

const Container = styled.div`
width: 320px;
height: 500px;
margin: auto; 
    border: 1px solid #858585;

    &:hover {
        box-shadow: 2px 2px 6px 0 #333333;
    }
`
const doggos = ['doggo1','doggo2','doggo3','doggo4']

const doggoCards = doggos.map(doggo => <DoggoCard src={doggo}/>)

const MobileScreen = () => {
    return <Container>
        {doggoCards}
    </Container>
}

export default MobileScreen
