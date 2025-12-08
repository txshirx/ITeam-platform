import { Header } from "@/widgets/Header"
import { PassedQuestions, QuizNavigation } from "@/widgets/Quiz"
import style from './QuizResultPage.module.css'
import { ButtonRestart } from "@/features/quiz"

const QuizResultPage = () => {
    return (
        <>
            <Header/>
            <QuizNavigation/>   
            <div className={style.container}>
                <PassedQuestions/>
                <div className={style.buttonContainer}><ButtonRestart/></div>
            </div>
        </>
    )
}

export default QuizResultPage