import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [username, password, dispatch])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                value={username}
                type="text"
                autoFocus
            />
            <Input
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                value={password}
                type="text"
            />
            <Button
                className={cls.btnInput}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})

export default LoginForm
