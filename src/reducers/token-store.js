import { createSlice } from "@reduxjs/toolkit";
export const session = () => JSON.parse(localStorage.getItem("tokenBearer") || '{}')

export const tokenStore = createSlice({
    name: "tokenStore",
    initialState: {
        token: session().token,
        user: session().user
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            localStorage.setItem("tokenBearer", JSON.stringify(action.payload))
        }
    }
})
export const { setToken } = tokenStore.actions
export default tokenStore.reducer
