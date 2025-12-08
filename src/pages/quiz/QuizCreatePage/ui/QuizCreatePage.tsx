import { Header } from "@/widgets/Header"
import styles from "./QuizCreatePage.module.css"
import { QuizFilters } from "@/features/quizFilters"
import { QuizNavigation } from "@/widgets/Quiz"

export default function QuizCreatePage() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <QuizNavigation/>
            <div className={styles.quizContainer}>
                <div className={styles.quiz}>
                    <QuizFilters/>
                </div>
            </div>
        </div>
    )
}