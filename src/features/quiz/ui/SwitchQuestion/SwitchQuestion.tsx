    import LeftArrow from '@/shared/ui/icons/LeftArrow/LeftArrow'
    import styles from './SwitchQuestion.module.css'
    import RightArrow from '@/shared/ui/icons/RightArrow/RightArrow'
    import { useLocalStorage } from '@/shared/hooks'
    import { STORAGE_KEYS } from '@/shared/constants'
    import type { Question } from '@/shared/config/api/types'
    import type { LearnedButtonState } from '@/shared/config/model/types'

    export const SwitchQuestion = ({ id } : { id: number }) => {
        const { storageValue: currentQuestion, setStorageValue: setCurrentQuestion } = useLocalStorage<number>(STORAGE_KEYS.ACTIVE_QUESTION_KEY)
        const { storageValue: status } = useLocalStorage<LearnedButtonState>(`${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`)
        const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)

        if (status === undefined) {
            return (
                <div className={styles.switchQuestion}>
                    <div>
                        <LeftArrow stroke='#8f8f8fff'/>
                    </div>
                    <div>
                        <RightArrow stroke='#8f8f8fff'/>
                    </div>
                </div>
            )
        }

        const handlePrevQuestion = () => {
            if (currentQuestion && currentQuestion > 1) {
                setCurrentQuestion(currentQuestion - 1) 
            }
        }

        const handleNextQuestion = () => {
            if ((questions && currentQuestion && currentQuestion < questions.length) && status?.buttonsState !== 'none') {
                setCurrentQuestion(currentQuestion + 1)
            }
        }

        return (
            <div className={styles.switchQuestion}>
                <div onClick={() =>  handlePrevQuestion()}>
                    <LeftArrow stroke={currentQuestion === 1 ? '#8f8f8fff' : undefined}/>
                </div>
                <div onClick={() =>  handleNextQuestion()}>
                    <RightArrow stroke={(currentQuestion === questions?.length || status?.buttonsState === 'none') ? '#8f8f8fff' : undefined}/>
                </div>
            </div>
        )
    }