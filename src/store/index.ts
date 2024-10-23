import { combineReducers, configureStore } from "@reduxjs/toolkit"

import userSlice from "./reducers/userSlice"

const rootReducer = combineReducers({
	user: userSlice,
})

export const store = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
