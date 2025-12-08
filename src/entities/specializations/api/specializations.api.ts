import { baseApi } from "@/shared/config/api/baseApi";
import type { SpecializationsType } from "../model/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const specializationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query<{ data: SpecializationsType[] }, void>({
            query: () => ENDPOINTS.SPECIALIZATIONS,
            providesTags: ['Specializations']
        }),
    }),
    overrideExisting: false
})