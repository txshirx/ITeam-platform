import type { Question } from "@/shared/config/api/types"
import { ROUTES } from "@/shared/config/router/routes"
import { Answer } from "@/shared/ui/components"
import { ItemEllipse } from "@/shared/ui/icons"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import styles from "./PreviewQuestionCard.module.css"

type PreviewCardQuestionProps = Pick<Question, 'title' | 'id' | 'shortAnswer' | 'rate' | 'complexity'>

export const PreviewQuestionCard = React.memo(({ title, id, shortAnswer, rate, complexity }: PreviewCardQuestionProps) => {
    const [clicked, setClicked] = useState(false)

    const clickedHandler = () => {
        setClicked(prev => !prev)
    }

    return (
        <>
            <div
                onClick={clickedHandler}
                className={styles.wrapper}
                style={{
                    borderBottom: clicked ? 'solid var(--main-yeahub) 2px' : 'none'
                }}
            >
                <ItemEllipse />
                <div className={styles.titleRow}>
                    <span>{title}</span>
                </div>
            </div>

            <div
                className={`${styles.content} ${clicked ? styles.contentOpen : ""}`}
            >
                <div
                    className={`${styles.metaRow} ${clicked ? styles.metaRowOpen : ""}`}
                >
                    Rating: {rate} Complexity: {complexity}
                </div>

                <Answer answer={shortAnswer} />

                <NavLink
                    to={`${ROUTES.QUESTIONS}/${id}`}
                    className={styles.showMoreLink}
                >
                    <span style={{ color: "var(--main-yeahub)" }}>Показать больше</span>
                </NavLink>
            </div>

        </>
    )
})
