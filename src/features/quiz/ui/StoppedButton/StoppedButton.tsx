import { useLocalStorage } from '@/shared/hooks'
import style from './StoppedButton.module.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/router/routes'
export const StoppedButton = () => {
    const { clearLocalStorage } = useLocalStorage('')
    const navigate = useNavigate()

    const handleStopped = () => {
        clearLocalStorage()
        navigate(ROUTES.QUIZ.CREATE, { replace: true })
    }

    return (
        <button onClick={handleStopped} className={style.stoppedButton}>
            <span>Завершить</span>
        </button>
    )
}