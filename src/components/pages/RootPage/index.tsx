import { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import Table from "../../organisms/Table"
import Search from "../../organisms/Search"

const RootPage: FC = () => {
	useEffect(() => {
		document.title = "Data"
	}, [])

	const { filteredData } = useSelector((state: RootState) => state.user)

	return (
		<>
			<Search></Search>
			<Table data={filteredData}></Table>
		</>
	)
}

export default RootPage
