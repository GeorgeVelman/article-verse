import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import Modal from 'shared/ui/Modal/Modal'
import LoginFormAsync from '../LoginForm/LoginForm.async'

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
    const { onClose, isOpen } = props
    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}

export default LoginModal
