import { Header } from "@/widgets/Header"
import styles from "./QuizCreatePage.module.css"
import { QuizFilters } from "@/features/quizFilters"
import { Navigation } from "@/widgets/Navigation"

export default function QuizCreatePage() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Navigation/>
            <div className={styles.quizContainer}>
                <div className={styles.quiz}>
                    <QuizFilters/>
                </div>
            </div>
        </div>
    )
}