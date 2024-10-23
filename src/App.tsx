import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./components/pages/RootPage"
import ErrorPage from "./components/pages/ErrorPage"

import "./App.scss"

const router = createBrowserRouter([
	{ path: "/", element: <RootPage />, errorElement: <ErrorPage /> },
])

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	)
}

export default App
