import { useEffect, useMemo, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

import InputControls from '../components/chat/InputControls'
import Messages from '../components/chat/Messages'
import ActiveUsersIndicator from '../components/chat/ActiveUsersIndicator'
import logo from '../assets/chatbox.png'

const ChatScreen = () => {

    // Hooks
    const inputRef = useRef(null)
    const messagesLayoutRef = useRef(null)
    const messaging = useSelector((state) => state.messaging)

    // Memoized Constants
    const nbrConnectedUsers = useMemo(() => messaging.activeUsers.length, [messaging.activeUsers.length])


    // Functions
    const scrollToBottom = () => {
        messagesLayoutRef.current.scrollTo(0, messagesLayoutRef.current.scrollHeight)
    }

    useEffect(() => {
        scrollToBottom()
    }, [messaging.messages.length]);

    return (
        <>
            <HeaderLayout >

                <HeaderTitleLayout>
                    <RoomTitle>
                        Public Room
                    </RoomTitle>
                    <ActiveUsersIndicator nbrConnectedUsers={nbrConnectedUsers} />
                </HeaderTitleLayout>

                <Logo src={logo} />

            </HeaderLayout>

            <MessagesLayout ref={messagesLayoutRef}>
                <Messages />
            </MessagesLayout>


            <InputControls inputRef={inputRef} />
        </>
    )
}


//   Components

const RoomTitle = styled.h1`
    font-weight: 900;
    font-size: 1.3rem;
    margin: 0;
    `

const Logo = styled.img`
    height: 2rem;
    `


// Layouts
const HeaderLayout = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    z-index: 2;
    padding: .5rem;

    background-color: rgba(0,0,0,.5);

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    `

const HeaderTitleLayout = styled.div`
    display: flex;
    flex-direction: column;

    `

const MessagesLayout = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-height: 85vh;
    margin-block: 1rem;
    overflow-y: scroll;

    position: absolute;
    top: 3rem;
    left: .5rem;
    right: .5rem;
    bottom: 3rem;

    `

export default ChatScreen;