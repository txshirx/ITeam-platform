import { baseApi } from "@/shared/config/api/baseApi";
import type { Question } from "@/shared/config/api/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const questionsQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<{data: Question[]}, void>({
            query: () => ENDPOINTS.QUESTIONS,
            providesTags: ['QuestionsList']
        })
    })
})