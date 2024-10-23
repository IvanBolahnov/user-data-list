import { Table2, Column, Cell } from "@blueprintjs/table"
import "@blueprintjs/table/lib/css/table.css"
import { FC } from "react"
import { dataType } from "../../../store/reducers/userSlice"

type TablePropType = {
	data: dataType[]
}

const Table: FC<TablePropType> = ({ data }) => {
	const usernameCellRenderer = (rowIndex: number) => {
		return <Cell>{data[rowIndex].username}</Cell>
	}
	const actionCellRenderer = (rowIndex: number) => {
		return <Cell>{data[rowIndex].action}</Cell>
	}
	const actionCreatedAtCellRenderer = (rowIndex: number) => {
		return <Cell>{data[rowIndex].action_createad_at}</Cell>
	}

	return (
		<Table2 numRows={data.length}>
			<Column name="username" cellRenderer={usernameCellRenderer}></Column>
			<Column name="action" cellRenderer={actionCellRenderer}></Column>
			<Column
				name="action_createad_at"
				cellRenderer={actionCreatedAtCellRenderer}
			></Column>
		</Table2>
	)
}

export default Table
