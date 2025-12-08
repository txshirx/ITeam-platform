import { ROUTES } from "@/shared/config/router/routes";
import { createBrowserRouter } from "react-router-dom";
import { QuizPage } from "@/pages/quiz/QuizPage";
import { QuizResultPage } from "@/pages/quiz/QuizResultPage";
import { QuestionPage } from "@/pages/question";
import { MainPage } from "@/pages/main";
import { QuizCreatePage } from "@/pages/quiz/QuizCreatePage";
import { QuestionsListPage } from "@/pages/questionsListPage";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainPage/>
    },
    {
        path: ROUTES.QUIZ.CREATE,
        element: <QuizCreatePage/>
    },
    {
        path: ROUTES.QUIZ.MAIN,
        element: <QuizPage/>
    },
    {
        path: ROUTES.QUIZ.RESULT,
        element: <QuizResultPage/>
    },
    {
        path: ROUTES.QUESTION,
        element: <QuestionPage/>
    },
    {
        path: ROUTES.QUESTIONS,
        element: <QuestionsListPage/>
    },
])