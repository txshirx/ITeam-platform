import { Header } from "@/widgets/Header"
import { PassedQuestions } from "@/widgets/Quiz"
import style from './QuizResultPage.module.css'
import { ButtonRestart } from "@/features/quiz"
import { Navigation } from "@/widgets/Navigation"

const QuizResultPage = () => {
    return (
        <>
            <Header/>
            <Navigation/>   
            <div className={style.container}>
                <PassedQuestions/>
                <div className={style.buttonContainer}><ButtonRestart/></div>
            </div>
        </>
    )
}

export default QuizResultPage