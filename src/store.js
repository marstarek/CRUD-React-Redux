import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/Users/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

