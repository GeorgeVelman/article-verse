import { Theme, useTheme } from 'app/providers/ThemeProvider'
import darkIcon from 'shared/assets/icons/dark-mode.png'
import lightIcon from 'shared/assets/icons/light-mode.png'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../../shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <img src={darkIcon} alt="dark-theme" />
            ) : (
                <img src={lightIcon} alt="light-theme" />
            )}
        </Button>
    )
}
