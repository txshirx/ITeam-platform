import styles from './QuestionCard.module.css'
import { Answer } from "@/shared/ui/components";
import type { Question } from "@/shared/config/api/types";

export const QuestionCard = ({ data } : { data: Question | undefined } ) => {
    return (
        
        <div className={styles.leftColumn}>
            <div className={styles.card}>
                <p className={styles.title}>{data?.title}</p>
                <span>{data?.description}</span>
            </div>

            {data?.shortAnswer === data?.longAnswer ? (
                <div key={'longAnswer'} className={styles.card}>
                    <p className={styles.sectionTitle}>Полный ответ</p>
                    {data?.longAnswer ? <Answer answer={data.longAnswer} /> : ""}
                </div>
            ) : (
                <>
                    <div className={styles.card}>
                        <p className={styles.sectionTitle}>Краткий ответ</p>
                        {data?.shortAnswer ? <Answer answer={data.shortAnswer} /> : ""}
                    </div>
                    <div key={'longAnswer'} className={styles.card}>
                        <p className={styles.sectionTitle}>Полный ответ</p>
                        {data?.longAnswer ? <Answer answer={data.longAnswer} /> : ""}
                    </div>
                </>
            )}
        </div>
    );
};
