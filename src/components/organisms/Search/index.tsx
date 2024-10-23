import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { userSlice } from "../../../store/reducers/userSlice"
import { InputGroup, Button } from "@blueprintjs/core"

import "./index.scss"

const { search } = userSlice.actions

const Search: FC = () => {
	const [value, setValue] = useState("")
	const dispatch = useDispatch()

	return (
		<form
			className="search"
			onSubmit={(e) => {
				e.preventDefault()
				dispatch(search(value))
			}}
		>
			<InputGroup
				className="search__input"
				placeholder="Search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="search"
			></InputGroup>
			<Button type="submit" minimal className="search__submit">
				<svg
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="11" cy="11" r="6" stroke="Black" />
					<path d="M20 20L17 17" stroke="Black" strokeLinecap="round" />
				</svg>
			</Button>
		</form>
	)
}

export default Search
