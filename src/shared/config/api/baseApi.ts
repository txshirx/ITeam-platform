import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "../model/config";

const baseUrl = CONFIG.API_BASE_URL

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({}),
    tagTypes: ['Skills', 'Specializations', 'Quiz', 'Question', 'QuestionsList']
})