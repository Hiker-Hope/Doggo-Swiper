import React from 'react'
import styled from 'styled-components'

const DoggoPic = styled.img`
    width: 320px;
    height: 500px;
`

const DoggoCard = props => {
    return (
        <DoggoPic
            src={`./assets/${props.src}.jpg`}
            alt={`The picture of ${props.src}`}
        />
    )
}

export default DoggoCard
