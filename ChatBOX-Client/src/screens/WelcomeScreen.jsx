import { useRef } from 'react'

import { styled } from 'styled-components'
import logo from '../assets/chatbox.png'
import { socket } from '../App'
import { store } from '../redux/Store'
import { join } from '../redux/reducers/Messaging'
import Footer from '../components/copyright/Footer'

// Dispatch
const joinConversation = (inputRef) => {
  const username = inputRef.value
  socket.emit('join', username)
  store.dispatch(join(username))
  inputRef.value = ""
}


const WelcomeScreen = () => {

    // Hooks
    const inputRef = useRef(null)
  
    return (
      <WelcomeLayout>
        <Logo src={logo} />
        <WelcomeMessageLayout>
  
          <Welcome>
            Welcome to ChatBOX
          </Welcome>
  
          <WelcomeMessage>
            Write your name and start chatting!
          </WelcomeMessage>
  
          <UsernameInput ref={inputRef} placeholder='Enter a username' />
  
          <LetsChatButton onClick={() => joinConversation(inputRef.current)}>Let's Chat!</LetsChatButton>
  
        </WelcomeMessageLayout>

        <Footer/>
  
      </WelcomeLayout>
    )
  }
  
// Components
  
const Logo = styled.img`
max-width: 15rem;
width: 50vw;
`

const Welcome = styled.span`
font-weight: bold;
font-size: 1.2rem;
`

const WelcomeMessage = styled.span`
font-size: .9rem;
font-weight: 300;
opacity: .7;
`

const UsernameInput = styled.input`
margin-top: 1rem;
padding: .5rem;

text-align: center;
font-size: .9rem;

border-radius: .5rem;
border: 2px solid var(--main-color);

background-color: var(--input-bg-color);
`

const LetsChatButton = styled.button`
margin-top: 1rem;
padding-block: .6rem;
padding-inline: 1rem;

border-radius: .5rem;
border: none;

background-color: var(--main-color);

align-self: center;

font-weight: bold;
font-size: .9rem;

`

// Layout

const WelcomeMessageLayout = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`


const WelcomeLayout = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`

  export default WelcomeScreen;