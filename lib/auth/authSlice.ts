import { createSlice } from "@reduxjs/toolkit"


interface AuthState {
  id: number
  grade: string
  isMaster: boolean
}

const initialState: AuthState = {
  id: 0,
  grade: 'none',
  isMaster: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMaster(state) {
      state.isMaster = true
    }
  }
})

export const { setMaster } = authSlice.actions
export default authSlice.reducer