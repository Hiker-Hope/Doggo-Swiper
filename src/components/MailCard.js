import React from 'react'
import styled from 'styled-components'

const LetterCard = styled.div`
    width: 100%;
`

const Author = styled.h4`
`

const MailCard = props => {
    const {author} = props.data
    return (
        <LetterCard>
            <Author>{author}</Author>
        </LetterCard>
    )
}

export default MailCard
