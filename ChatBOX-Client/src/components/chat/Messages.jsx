import { useSelector } from 'react-redux'

import notificationIcon from '../../assets/notification.png'
import { styled } from 'styled-components'

const Messages = () => {
    const username = useSelector((state) => state.messaging.username)
    const messages = useSelector((state) => state.messaging.messages)

    return (
        <>
            {
                messages.map((message, index) =>
                    message.type === 'notification' ?
                        <NotificationLayout key={index}>

                            <NotificationIcon src={notificationIcon} />

                            <NotificationText>
                                {message.content}
                            </NotificationText>

                        </NotificationLayout>
                        :
                        <MessageLayout key={index}>
                            {
                                message.username === username ?
                                    <>
                                        <UsernameLabel position={'left'}>{message.username} (Me)</UsernameLabel>
                                        <LeftMessage key={index}>{message.content}</LeftMessage>
                                    </>
                                    :
                                    <>
                                        <UsernameLabel position={'right'}>{message.username}</UsernameLabel>
                                        <RightMessage key={index}>{message.content}</RightMessage>
                                    </>
                            }
                        </MessageLayout>

                )
            }
        </>
    )
}

// Components

const LeftMessage = styled.div`
      padding-inline: 1rem;
      padding-block: .3rem;
      border-radius: 1rem;
      background-color: var(--local-msg-bubble-bg-color);
      align-self: flex-start;
      font-size: small;
      font-weight: bold;
      max-width: 50%;

      
    `
const RightMessage = styled.div`
      padding-inline: 1rem;
      padding-block: .5rem;
      border-radius: 1rem;
      background-color: var(--remote-msg-bubble-bg-color);
      align-self: flex-end;
      font-size: small;
      font-weight: bold;
      max-width: 50%;
    `

const NotificationText = styled.span`
      font-weight: bold;
      font-size: small;
      text-align: center;
    `

const UsernameLabel = styled.label`
      font-size: small;
      align-self: ${({ position }) => position === 'left' ? 'flex-start' : 'flex-end'};
      margin-inline: .5rem;
    `

const NotificationIcon = styled.img`
      height: 1rem;
    `

// Layouts

const MessageLayout = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
    `

const NotificationLayout = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .1rem;
    `

export default Messages;