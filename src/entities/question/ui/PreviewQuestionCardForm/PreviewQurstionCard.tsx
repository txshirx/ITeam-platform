import type { Question } from "@/shared/config/api/types"
import { ROUTES } from "@/shared/config/router/routes"
import { Answer } from "@/shared/ui/components"
import { ItemEllipse } from "@/shared/ui/icons"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

type PreviewCardQuestionProps = Pick<Question, 'title' | 'id' | 'shortAnswer' | 'rate' | 'complexity'>

export const PreviewQuestionCard = React.memo(({ title, id, shortAnswer, rate, complexity }: PreviewCardQuestionProps) => {
    const [clicked, setClicked] = useState(false)

    const clickedHandler = () => {
        setClicked(prev => !prev)
    }

    return (
        <>
            <div onClick={clickedHandler}
                style={{
                    width: 760,
                    minHeight: 64,
                    borderBottom: clicked ? '' : 'solid #D1D1D1 1px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: 10, 
                    paddingInline: 20
                }}
            >
                <ItemEllipse/>
                <div style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                }}>
                    <span>{title}</span>
                </div>
            </div>

            <div
                style={{
                    maxWidth: 768,
                    maxHeight: clicked ? '100%' : 0, 
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    opacity: clicked ? 1 : 0,
                    pointerEvents: clicked ? 'auto' : 'none',
                    borderBottom: 'solid #D1D1D1 1px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10
                }}
            >
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 40,
                    padding: clicked ? '16px 0' : '0', 
                    transition: 'padding 0.4s ease'
                }}>
                    Rating: {rate} Complexity: {complexity}
                </div>
                <Answer answer={shortAnswer} />
                <NavLink to={`${ROUTES.QUESTIONS}/${id}`} 
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: 10,
                        alignItems: 'center',
                        textDecoration: 'none',
                        marginBottom: 10,
                    }}
                > 
                    <span>Показать больше</span> 
                </NavLink>
            </div>
        </>
    )
})