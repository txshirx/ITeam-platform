export const ROUTES = {
    MAIN: '/',
    QUIZ: {
        CREATE: '/quiz',
        MAIN: '/new',
        RESULT: '/result', 
    },
    QUESTION: '/questions/:questionId',
    QUESTIONS: '/questions',
    AUTH: '/register',
    LOGIN: '/login'
} as const 