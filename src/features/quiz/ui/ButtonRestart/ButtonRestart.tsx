import { useLocalStorage } from '@/shared/hooks'
import style from './ButtonRestart.module.css'
import { STORAGE_KEYS } from '@/shared/constants'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/router/routes'
import { useEffect } from 'react'
import type { Question } from '@/shared/config/api/types'

export const ButtonRestart = () => {
    const navigate = useNavigate()
    const { setStorageValue: setAactiveQuestion } = useLocalStorage(STORAGE_KEYS.ACTIVE_QUESTION_KEY, 1)
    const { clearLocalStorageItem: clearAnswered } = useLocalStorage(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY)
    const { setStorageValue: setIsLearned } = useLocalStorage(STORAGE_KEYS.IS_LEARNED_KEY)
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    const { setStorageValue: setIsActive } = useLocalStorage(STORAGE_KEYS.QUIZ_IS_ACTIVE, true)


    const handleRestart = () => {
        setAactiveQuestion(1)
        setIsActive(true)
        clearAnswered()
        navigate(ROUTES.QUIZ.MAIN)
    }

    const handleClearAnswered = (id: number) => {
        setIsLearned({ isAnsweredStatus: 'none', buttonsState: 'none' }, `${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`)
    }

    useEffect(() => {
        if (questions) {
            questions?.forEach(item => {
                handleClearAnswered(item.id)
            })
        }
    }, [])

    return (
        <button onClick={() => handleRestart()} className={style.buttonStyle}>Пройти заново</button>
    )
}