import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => new Promise((res) => {
        setTimeout(() => res(import('./LoginForm')), 750)
    }),
)

export default LoginFormAsync
