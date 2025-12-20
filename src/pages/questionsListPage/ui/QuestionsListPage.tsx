import { QuestionsFilter } from "@/features/question/questionsFilter"
import { Header } from "@/widgets/Header"
import { QuestionsList } from "@/widgets/Questions"
import styles from './QuestionsListPage.module.css'

const QuestionsListPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <QuestionsList />
                <QuestionsFilter />
            </div>
        </>
    )
}

export default QuestionsListPage