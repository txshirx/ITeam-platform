import styles from './StartQuizButton.module.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/router/routes'
import type { FiltersParamsType } from '@/shared/config/api/types'
import { useLocalStorage } from '@/shared/hooks'
import { STORAGE_KEYS } from '@/shared/constants'
import { quizQuery } from '@/features/quizFilters/api/quiz.api'


export const StartQuizButton = ({ title, params } : { title: string, params: FiltersParamsType }) => {
    const navigate = useNavigate()
    const { setStorageValue: setActiveQuestion } = useLocalStorage(STORAGE_KEYS.ACTIVE_QUESTION_KEY, 1) 
    const [ getQuiz, {data, isLoading} ] = quizQuery.useLazyGetQuizQuery()
    const { setStorageValue: setQuestions } = useLocalStorage(STORAGE_KEYS.QUESTIONS_KEY, data?.questions)
    const { setStorageValue: setIsActive } = useLocalStorage(STORAGE_KEYS.QUIZ_IS_ACTIVE, true)

    const handleStartQuiz = async () => {
        const result = await getQuiz(params).unwrap()
        if (result.questions) {
            setIsActive(true)
            setQuestions(result.questions)
            setActiveQuestion(1)
            navigate(ROUTES.QUIZ.MAIN)
        }
    }

    return (
        <button disabled={isLoading} style={{ backgroundColor: isLoading ? '#00530fff' : '' }} onClick={handleStartQuiz} className={styles.startQuizButton}>
            <span>{title}</span>
        </button>
    )
}