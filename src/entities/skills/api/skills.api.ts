import { baseApi } from "@/shared/config/api/baseApi";
import type { SkillsType } from "../model/types";
import { ENDPOINTS } from "@/shared/config/model/endpoints";

export const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<{ data: SkillsType[] }, void>({
            query: () => ENDPOINTS.SKILLS,
            providesTags: ['Skills']
        }),
    }),
    overrideExisting: false
})