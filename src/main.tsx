import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { HotkeysProvider } from "@blueprintjs/core"
import { store } from "./store"

import "@blueprintjs/core/lib/css/blueprint.css"
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import "./index.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store()}>
			<HotkeysProvider>
				<App />
			</HotkeysProvider>
		</Provider>
	</StrictMode>
)
