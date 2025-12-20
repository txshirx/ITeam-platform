import { baseApi } from "@/shared/config/api/baseApi";
import type { FiltersParamsType, Question } from "@/shared/config/api/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const quizQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuiz: builder.query<{ questions: Question[] }, FiltersParamsType>({
            query: (params) => {
                const filterParams = params ? Object.fromEntries(
                    Object.entries(params).filter(([_, value]) => !(Array.isArray(value) && value.length === 0))
                ) : {}

                return {
                    url: ENDPOINTS.QUIZ,
                    params: filterParams
                }
            },
            providesTags: ['Quiz'] 
        })
    })
})