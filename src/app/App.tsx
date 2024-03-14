import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	const Component = () => {
		const { t, i18n } = useTranslation()

		const toggle = () => {
			i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
		}

		return (
			<div>
				<button onClick={toggle}>{t('Перевод')}</button>
				{t('Тестовый пример')}
			</div>
		)
	}

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='loading'>
				<Navbar />
				<Component />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
