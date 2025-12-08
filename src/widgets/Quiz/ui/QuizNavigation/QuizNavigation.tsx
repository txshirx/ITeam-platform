import { ROUTES } from "@/shared/config/router/routes"
import { RightArrowNavigation } from "@/shared/ui/icons"
import { Link, useLocation } from "react-router-dom"
import style from './QuizNavigation.module.css'


export const QuizNavigation = () => {
    const location = useLocation()

    return (
        <div className={style.quizNavContainer}>
            {
                location.pathname === ROUTES.QUIZ.CREATE ? 
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ.CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                    </div>
                )
                : location.pathname === ROUTES.QUIZ.MAIN ? 
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ.CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                        <Link to={ROUTES.QUIZ.MAIN}><span>Квиз</span> <RightArrowNavigation/></Link>
                    </div>
                ) 
                :
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ.CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                        <Link to={ROUTES.QUIZ.RESULT}><span>Результат</span> <RightArrowNavigation/></Link>
                    </div>
                )
            }
        </div>
    )
}