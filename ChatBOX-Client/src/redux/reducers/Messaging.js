import { createSlice } from '@reduxjs/toolkit'

export const messagingSlice = createSlice({
  name: 'messaging',
  initialState: {
    username: '',
    messages: [],
    activeUsers: [],
  },
  reducers: {
    join: (state, action) => {
      state.username = action.payload
    },
    send: (state, action) => {
      state.messages = [...state.messages, {
        username: state.username,
        content: action.payload
      }]
    },
    receive: (state, action) => {
      state.messages = [...state.messages, ...action.payload.map((notif) => ({ type: 'message', ...notif }))]
    },
    receive_notification: (state, action) => {
      state.messages = [...state.messages, ...action.payload.map((notif) => ({ type: 'notification', content: notif }))]
    },
    activeUsers: (state, action) => {
      state.activeUsers = action.payload
    },
    disconnect: (state, action) => {
      state.username = ''
    },
  },
})

export const { join, send, receive, receive_notification, activeUsers, writingUsers, disconnect } = messagingSlice.actions

export default messagingSlice.reducer