import { styled } from 'styled-components'

import { socket } from '../../App'
import { store } from '../../redux/Store'
import sendPaperIcon from '../../assets/send.png'
import { send } from '../../redux/reducers/Messaging'


// Dispatch
const emitMessage = (inputRef) => {
    const message = inputRef.value
    socket.emit('message', message)
    store.dispatch(send(message))
    inputRef.value = ""
}
  
const InputControls = ({ inputRef }) => {

    return (
        <ControlsLayout>
            <MessageInput ref={inputRef} />

            <SendLayout onClick={() => emitMessage(inputRef.current)}>
                <SendIcon src={sendPaperIcon} />
                {/* <SendText>
            Send
          </SendText> */}
            </SendLayout>

        </ControlsLayout>
    )

}

// Components
const MessageInput = styled.input`
  flex: 1;

  margin-top: 1rem;
  padding: .5rem;
  
  border-radius: .5rem;
  border: 2px solid var(--main-color);
  
  background-color: var(--input-bg-color);
`

const SendText = styled.span`
font-weight: bold;
font-size: small;
`


const SendIcon = styled.img`
height: 1rem;
`

// Layouts

const SendLayout = styled.div`
display: flex;
align-items: center;

gap: .3rem;
margin-top: 1rem;
padding-block: .6rem;
padding-inline: 1rem;

border-radius: .5rem;
border: none;

background-color: var(--main-color);

font-weight: bold;
`

const ControlsLayout = styled.div`
display: flex;
position: absolute;

bottom: 1rem;
left: 0;
right: 0;

padding: .5rem;
gap: .3rem;
`

export default InputControls;