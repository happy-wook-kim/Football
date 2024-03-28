import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import authReducer from './auth/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']