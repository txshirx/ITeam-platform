import { PreviewQuestionCard } from "@/entities/question";
import { questionsQuery } from "@/entities/questions";

import styles from './QuestionsList.module.css'
import { QuestionsListSkeleton } from "./QuestionList.skeleton";

export const QuestionsList = () => { 
    const { data, isLoading, isError, isFetching, isUninitialized } = questionsQuery.useGetQuestionsQuery()

    const isLoad = isLoading || isFetching || isUninitialized

    if (isLoad || data?.data.length === 0) {
        return <QuestionsListSkeleton/>
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