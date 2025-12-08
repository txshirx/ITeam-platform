export const ROUTES = {
    MAIN: '/',
    QUIZ: {
        CREATE: '/quiz',
        MAIN: '/new',
        RESULT: '/result', 
    },
    QUESTION: '/questions/:questionId',
    QUESTIONS: '/questions'
} as const 