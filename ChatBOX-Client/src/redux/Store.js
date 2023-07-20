import { configureStore } from '@reduxjs/toolkit'
import messagingSlice from './reducers/Messaging'

export const store = configureStore({
  reducer: {
    messaging: messagingSlice,
  },
})