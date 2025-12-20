import { ChooseComplexity } from "./ChooseComplexity/ChooseComplexity"
import { ChooseRate } from "./ChooseRate/ChooseRate"
import { ChooseSkills } from "./ChooseSkills/ChooseSkills"
import { ChooseSpecializations } from "./ChooseSpecializations/ChooseSpecializations"

import styles from './QuestionsFilter.module.css'
import { Search } from "./Search/Search"

export const QuestionsFilter = () => {
    return (
        <div className={styles.container}>
            <Search />
            <ChooseSpecializations />
            <ChooseSkills />
            <ChooseComplexity />
            <ChooseRate />
        </div>
    )
}