import { useEffect, useRef, useState } from 'react'
import './App.css'
import sendPaperIcon from './assets/send.png'


import { styled } from 'styled-components'

import { connect } from 'socket.io-client'
import { store } from './redux/Store'
import { receive_notification, receive, send, join, activeUsers, disconnect } from './redux/reducers/Messaging'
import { useSelector } from 'react-redux'
import WelcomeScreen from './screens/WelcomeScreen'
import ChatScreen from './screens/ChatScreen'

export const socket = connect("http://129.146.60.95:5172")

// Receivers
socket.on('message', (message) => {
  store.dispatch(receive([message]))
})

socket.on('notification', (notification) => {
  store.dispatch(receive_notification([notification]))
})

socket.on('activeUsers', (actUsers) => {
  store.dispatch(activeUsers(actUsers))
})

socket.on('disconnect', () => {
  store.dispatch(disconnect())
})


function App() {

  const username = useSelector((state) => state.messaging.username)

  if (username === '')
    return <WelcomeScreen />

  return <ChatScreen />

}

export default App


// Related

