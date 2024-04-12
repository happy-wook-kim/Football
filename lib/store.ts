import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import authReducer from './auth/authSlice'
import infoReducer from './info/infoSlice'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer,
      info: infoReducer
    },
    // middleware: (middleware: any) => middleware().concat(thunkMiddleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     auth: authReducer
//   },
//   middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(thunkMiddleware),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export default store;