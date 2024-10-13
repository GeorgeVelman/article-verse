import Modal from 'shared/ui/Modal/Modal'
import LoginForm from '../LoginForm/LoginForm'

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
            <LoginForm />
        </Modal>
    )
}

export default LoginModal
