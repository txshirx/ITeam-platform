import { ROUTES } from "@/shared/config/router/routes"
import { Link } from "react-router-dom"

export const MainPage = () => {
    return (
        <Link to={ROUTES.QUIZ.CREATE}>Пройти собеседование</Link>
    )
}