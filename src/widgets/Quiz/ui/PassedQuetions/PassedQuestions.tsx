import { useLocalStorage } from '@/shared/hooks'
import style from './PassedQuestions.module.css'
import { STORAGE_KEYS } from '@/shared/constants'
import type { Question } from '@/shared/config/api/types'
import type { IsAnsweredStatusType } from '@/shared/config/model/types'
import { PassedQuestionCard } from '@/entities/quiz'

export const PassedQuestions = () => {
    const { storageValue: questions} = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    const { getStorageValue } = useLocalStorage<IsAnsweredStatusType>(STORAGE_KEYS.PASSED_QUESTIONS)

    return (
        <div className={style.container}>
            <h2>Список пройденных вопросов собеседования</h2>
            <div className={style.passedQuestions}>
                
                {questions?.map(item => {
                    const status = getStorageValue<IsAnsweredStatusType>(`${STORAGE_KEYS.PASSED_QUESTIONS}_${item.id}`)
                    return (
                        <PassedQuestionCard
                            key={item.id}
                            title={item.title}
                            imageSrc={item.imageSrc}
                            flag={status}
                            id={item.id}
                        />
                    )   
                })}
            </div>
        </div>
    )
}