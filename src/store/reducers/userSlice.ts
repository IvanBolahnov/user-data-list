import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type dataType = {
	action: string
	action_createad_at: string
	username: string
}

export type userStateType = {
	data: dataType[]
	filteredData: dataType[]
}

const initialData: dataType[] = [
	{
		username: "user-001",
		action: "logged_in",
		action_createad_at: "2022-05-08T07:01:09.171245Z",
	},
	{
		username: "user-001",
		action: "button_sign_in_tapped",
		action_createad_at: "2022-05-08T07:02:09.171245Z",
	},
	{
		username: "user-001",
		action: "button_log_out_tapped",
		action_createad_at: "2022-05-08T07:03:09.171245Z",
	},
]

const initialState: userStateType = {
	data: initialData,
	filteredData: initialData,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		search: (state, action: PayloadAction<string>) => {
			const { data } = state

			if (!action.payload) {
				state.filteredData = data
				return
			}

			const input = action.payload.toLowerCase()

			state.filteredData = data.filter((note) => {
				const username = note.username.toLowerCase()
				const action = note.action.toLowerCase()
				const actionCreateadAt = note.action_createad_at.toLowerCase()

				const isUsername = username.includes(input)
				const isAction = action.includes(input)
				const isActionCreateadAt = actionCreateadAt.includes(input)

				if (isUsername || isAction || isActionCreateadAt) {
					return true
				}
			})
		},
	},
})

export default userSlice.reducer
