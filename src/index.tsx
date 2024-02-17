import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { testFunc } from './test'
import ThemeProvider from './theme/ThemeProvider'

testFunc()
render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
