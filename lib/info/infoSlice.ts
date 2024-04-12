import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InfoState {
  lang: string
}

const initialState: InfoState = {
  lang: 'ko'
}

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<string>) {
      state.lang = action.payload
    }
  }
})

export const { setLang } = infoSlice.actions
export default infoSlice.reducer