import { PreviewQuestionCard } from "@/entities/question";
import { questionsQuery } from "@/entities/questions";

export const QuestionsList = () => { 
    const { data, isLoading, isError } = questionsQuery.useGetQuestionsQuery()

    console.log(data)

    return (
        <div>
            {data?.data.map(item => (
                <PreviewQuestionCard
                    title={item.title}
                    id={item.id}
                    rate={item.rate}
                    complexity={item.complexity}
                    shortAnswer={item.shortAnswer}
                />
            ))}
        </div>
    )
} 