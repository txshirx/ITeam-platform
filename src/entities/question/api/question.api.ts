import { baseApi } from "@/shared/config/api/baseApi";
import type { Question } from "@/shared/config/api/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const questionQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestion: builder.query<Question, number>({
            query: (id) => `${ENDPOINTS.QUESTIONS}${id}`,
            providesTags: (_, __, id) => [{ type: 'Question', id}]
        })
    })
})