import { QuestionsFilter } from "@/features/question/questionsFilter"
import { Header } from "@/widgets/Header"
import { QuestionsList } from "@/widgets/Questions"
import styles from './QuestionsListPage.module.css'
import { Navigation } from "@/widgets/Navigation"

const QuestionsListPage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className={styles.container}>
                <QuestionsList />
                <QuestionsFilter />
            </div>
        </>
    )
}

export default QuestionsListPage