import { ChooseComplexity } from "./ChooseComplexity/ChooseComplexity"
import { ChooseMode } from "./ChooseMode/ChooseMode"
import { ChooseSkills } from "./ChooseSkills/ChooseSkills"
import styles from './QuizFilter.module.css'
import { ChooseSpecializations } from "./ChooseSpecializations/ChooseSpecializations"
import { ChooseLimit } from "./ChooseLimit/ChooseLimit"
import { useFilterParams } from "../model/hooks/useFilterParams"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useLocalStorage } from "@/shared/hooks"
import { STORAGE_KEYS } from "@/shared/constants"
import type { Question } from "@/shared/config/api/types"
import { ROUTES } from "@/shared/config/router/routes"
import { StartQuizButton } from "./StartQuizButton/StartQuizButton"

export const QuizFilters = () => {
    const { filtersParams } = useFilterParams() 
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    const navigate = useNavigate()
    const { storageValue: quizIsActive } = useLocalStorage(STORAGE_KEYS.QUIZ_IS_ACTIVE)

    useEffect(() => {
        if (questions && quizIsActive) {
            navigate(ROUTES.QUIZ.MAIN)
        }
    }, [])

    return (
        <div className={styles.quizFilters}>
            <div className={styles.sideBar}>
                <h2>Собеседование</h2>
                <ChooseSpecializations/>
                <ChooseSkills/>
            </div>
            <div className={styles.sideBar}>
                <ChooseComplexity/>
                <ChooseMode/>
                <ChooseLimit/>
                <StartQuizButton params={filtersParams} title="Начать"/>
            </div>
        </div>
    )
}