import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false
  },
  reducers: {
    setAuthToken(state, action: PayloadAction<boolean>) {
      state.isAuth = true;  
    }
  }
})

export const { setAuthToken } = authSlice.actions
export default authSlice.reducer