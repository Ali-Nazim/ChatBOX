import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
    return (
        <FooterLayout>
           Developed by <BlueText>Nazim A.B.</BlueText> - 190723-0.1b
        </FooterLayout>
    )
}

const FooterLayout = styled.div`
    position: absolute;
    bottom: .5rem;
    left: 50%;
    transform: translateX(-50%);

    width: fit-content;
    font-size: .6rem;
    opacity: .5;
`

const BlueText = styled.span`
    color: var(--main-color);
    font-weight: bold;
`


export default Footer