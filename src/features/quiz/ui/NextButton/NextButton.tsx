import { useLocalStorage } from '@/shared/hooks'
import styles from './NextButton.module.css'
import { STORAGE_KEYS } from '@/shared/constants'
import type { LearnedButtonState } from '@/shared/config/model/types'
import type { Question } from '@/shared/config/api/types'
import clsx from 'clsx'
import { IsAnsweredStatus } from '../../model/constants'

export const NextButton = ({ id } : { id: number }) => {
    const { storageValue: currentQuestion, setStorageValue: setCurrentQuestion } = useLocalStorage<number>(STORAGE_KEYS.ACTIVE_QUESTION_KEY)
    const { storageValue: status } = useLocalStorage<LearnedButtonState>(`${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`)
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    const isActive = (status?.isAnsweredStatus === IsAnsweredStatus.LEARNED || status?.isAnsweredStatus === IsAnsweredStatus.NOT_LEARNED)  

    const handleNextQuestion = () => {
        if ((questions && currentQuestion && currentQuestion < questions.length) && status?.buttonsState !== 'none') {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <button 
            onClick={handleNextQuestion} 
            className={clsx(styles.nextButton, isActive ? styles.nextButtonActive : null)}
            style={{
                borderColor: isActive ? 'var(--main-yeahub)' : undefined,
                color: isActive ? 'var(--main-yeahub)' : undefined,
            }}
        >
            Продолжить
        </button>
    )
}