import { configureStore } from "@reduxjs/toolkit";
import tokenStore from "../reducers/token-store"

const store = configureStore({
    reducer: {
        token: tokenStore
    }
})

export default store
