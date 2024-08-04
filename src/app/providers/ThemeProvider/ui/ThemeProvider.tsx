import { FC, useMemo, useState } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContent,
} from '../lib/ThemeContext'

const ThemeProvider: FC = ({ children }) => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])
    return (
        <ThemeContent.Provider value={defaultProps}>
            {children}
        </ThemeContent.Provider>
    )
}

export default ThemeProvider
