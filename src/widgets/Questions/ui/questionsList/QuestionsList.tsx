import { PreviewQuestionCard } from "@/entities/question";
import { questionsQuery } from "@/entities/questions";

import styles from './QuestionsList.module.css'
import { QuestionsListSkeleton } from "./QuestionList.skeleton";

export const QuestionsList = () => { 
    const { data, isLoading, isError, error, isFetching, isUninitialized } = questionsQuery.useGetQuestionsQuery()

    const isLoad = isLoading || isFetching || isUninitialized

    if (isLoad || data?.data.length === 0) {
        return <QuestionsListSkeleton/>
    }

    if (isError) {
        return (
            <div className={styles.listWrapper}>
                <h2>УПС! Кажется произошла ошибка</h2>
            </div>
        )
    }

    return (
        <div className={styles.listWrapper}>
            {
                data?.data.map(item => (
                    <PreviewQuestionCard
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        rate={item.rate}
                        complexity={item.complexity}
                        shortAnswer={item.shortAnswer}
                    />
                ))
            }
        </div>
    )
} 