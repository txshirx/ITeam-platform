import { useEffect, useState } from 'react';
import styles from './QuizQuestionCard.module.css'
import { ItemEllipse } from '@/shared/ui/icons';
import { Answer } from '@/shared/ui/components';

type QuestionCardPropsType = {
    id: number
    title: string,
    shortAnswer: string
    LearnedButtons: React.ComponentType<{ id: number }>,
    CompleteButton: React.ComponentType,
    SwitchQuestion: React.ComponentType<{ id: number }>,
    NextButton?: React.ComponentType<{ id: number }>,
}

export const QuizQuestionCard = (
    { 
        id,
        title,
        shortAnswer,
        LearnedButtons, 
        SwitchQuestion,
        CompleteButton,
        NextButton
    } : QuestionCardPropsType) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(false)
    }, [shortAnswer])

    return (
        <div className={styles.card}>
            <SwitchQuestion id={id}/>
            <div className={styles.cardContent}>
                <div className={styles.titleBlock}>
                    <ItemEllipse/>
                    <h2>{title}</h2>
                </div>
                <div>
                    {!visible ? 
                        (   
                            <div onClick={() => setVisible(prev => !prev)}>
                                <p className={styles.showText}>Посмотреть ответ</p>
                            </div>
                        )
                        : 
                        (
                            <>
                                <Answer answer={shortAnswer}/>
                                <div onClick={() => setVisible(prev => !prev)}>
                                    <p className={styles.showText}>Скрыть ответ</p>
                                </div> 
                            </>
                        )
                    }
                </div>
                <LearnedButtons id={id}/>
            </div>
            <div className={styles.flex}>
                <CompleteButton/>
                {NextButton ? <NextButton id={id}/> : null}
            </div>
        </div>
    )
}