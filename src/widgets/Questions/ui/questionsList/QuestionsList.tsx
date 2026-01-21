import { PreviewQuestionCard } from "@/entities/question";
import { questionsQuery } from "@/entities/questions";

import styles from './QuestionsList.module.css'
import { QuestionsListSkeleton } from "./QuestionList.skeleton";
import { useFilterQuery } from "@/shared/hooks/useFilterQuery/useFilterQuery";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";

export const QuestionsList = () => { 
    const { filtersParams, updateFilters } = useFilterQuery()
    const { data, isLoading, isError } = questionsQuery.useGetQuestionsQuery(filtersParams)
    const [isLoad, setIsLoad] = useState(isLoading || data?.data.length === 0)

    const changePageHandler = (value: number) => {
        updateFilters('page', value)
    }

    console.log(data)
    useEffect(() => {

        
        let id: ReturnType<typeof setTimeout>;
        const delayHandler = () => {
            id = setTimeout(() => setIsLoad(false), 5000)
        }

        if (data?.data.length === 0) {
            delayHandler()
        } else {
            setIsLoad(isLoading)
        }
 
        return () => clearTimeout(id)

    }, [data?.data, data?.data.length])

    if (isLoad) {
        return <QuestionsListSkeleton/>
    } else if (data?.data.length === 0) {
        return (
            <div className={styles.listWrapper}>
                <h2>По вашему запросу ничего не найдено :(</h2>
            </div>
        )
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
            <h2>Вопросы</h2>
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
            <Pagination 
                total={data?.total ?? 0}
                limit={data?.limit ?? 0}
                page={data?.page ?? 0}
                onPageChange={changePageHandler}
            />
        </div>
    )
} 