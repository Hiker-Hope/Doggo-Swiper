import React from 'react'
import styled from 'styled-components'

const LetterCard = styled.div`
    width: 100%;

    & * {
        margin: 0;
        padding: 16px 12px;
    }
`

const EmailAuthor = styled.h3`
    text-align: left;
`

const EmailAddress = styled.h4`
    text-align: left;
`
const EmailBody = styled.p`
`
const MailCard = props => {
    const { author, address, body } = props.data
    return (
        <LetterCard>
            <EmailAuthor>From: {author}</EmailAuthor>
            <EmailAddress>Email: {address} </EmailAddress>
            <EmailBody>{body}</EmailBody>
        </LetterCard>
    )
}

export default MailCard
