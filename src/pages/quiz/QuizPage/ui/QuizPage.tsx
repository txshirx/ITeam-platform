import { Header } from "@/widgets/Header"
import styles from './QuizPage.module.css'
import { CompleteButton, LearnedButtons, NextButton, StoppedButton, SwitchQuestion } from "@/features/quiz"
import { useLocalStorage } from "@/shared/hooks"
import { STORAGE_KEYS } from "@/shared/constants"
import type { Question } from "@/shared/config/api/types"
import { ProgressBar } from "@/widgets/Quiz"
import { QuizQuestionCard } from "@/entities/quiz"
import { Navigation } from "@/widgets/Navigation"

const QuizPage = () => {
    const { storageValue: currentQuestion } = useLocalStorage<number>(STORAGE_KEYS.ACTIVE_QUESTION_KEY)
    const { storageValue: answeredQuestions } = useLocalStorage<number>(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY)
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Navigation/>
            <div className={styles.cont}>
                <ProgressBar answeredQuestions={answeredQuestions ? answeredQuestions : 0} maxQuestions={questions?.length as number}/>
                <div className={styles.quizContainer}>
                    {questions?.filter((_, ind) => currentQuestion && ind === currentQuestion - 1).map(item => (
                        <QuizQuestionCard
                            key={item.id}
                            title={item ? item.title : ''}
                            LearnedButtons={LearnedButtons}
                            shortAnswer={item ? item.shortAnswer : ''}
                            CompleteButton={questions.length === answeredQuestions ? CompleteButton : StoppedButton}
                            SwitchQuestion={SwitchQuestion}
                            NextButton={questions.length === currentQuestion ? undefined : NextButton}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuizPage