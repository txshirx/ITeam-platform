import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "../model/config";
import { LS_ACCESS_TOKEN_KEY } from "@/shared/constants";

const baseUrl = CONFIG.API_BASE_URL || 'http://localhost:3000'

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = localStorage.getItem(LS_ACCESS_TOKEN_KEY);
    
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
    
    if (refreshResult.data) {
      const { access_token } = refreshResult.data as { access_token: string };
      localStorage.setItem(LS_ACCESS_TOKEN_KEY, access_token);
      
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem(LS_ACCESS_TOKEN_KEY);
      window.location.href = '/login';
    }
  }
  
  return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['Skills', 'Specializations', 'Quiz', 'Question', 'QuestionsList', 'Authorization']
})