import { ROUTES } from "@/shared/config/router/routes";
import { createBrowserRouter } from "react-router-dom";
import { QuizPage } from "@/pages/quiz/QuizPage";
import { QuizResultPage } from "@/pages/quiz/QuizResultPage";
import { QuestionPage } from "@/pages/question";
import { QuizCreatePage } from "@/pages/quiz/QuizCreatePage";
import { QuestionsListPage } from "@/pages/questionsListPage";
import { OnboardingPage } from "@/pages/onboarding";
import { RegisterPage } from "@/pages/register";
import { LoginPage } from "@/pages/login";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <OnboardingPage/>
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
    {
        path: ROUTES.AUTH,
        element: <RegisterPage/>
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginPage/>
    }
])