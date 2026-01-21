import { baseApi } from "@/shared/config/api/baseApi";
import type { FiltersParamsType, Question } from "@/shared/config/api/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const questionsQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<{data: Question[], total: number, page: number, limit: number}, FiltersParamsType>({
            query: (params) => {
                const filterParams = params ? Object.fromEntries(
                    Object.entries(params).filter(([_, value]) => !(Array.isArray(value) && value.length === 0))
                ) : {}
                return {
                    url: ENDPOINTS.QUESTIONS,
                    params: filterParams
                }
            },
            providesTags: ['QuestionsList']
        })
    })
})