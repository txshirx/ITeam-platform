import { baseApi } from "@/shared/config/api/baseApi"; 

interface Auth {
  email: string;
  password: string;
}

interface SignUp extends Auth {
  username: string;
  confirmPassword: string;
}

interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

const LS_ACCESS_TOKEN_KEY = 'access_token';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, Auth>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(LS_ACCESS_TOKEN_KEY, data.access_token);
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    
    register: builder.mutation<AuthResponse, SignUp>({
      query: (userData) => ({
        url: '/auth/signUp',
        method: 'POST',
        body: userData,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem(LS_ACCESS_TOKEN_KEY, data.access_token);
        } catch (error) {
          console.error('Registration failed:', error);
        }
      },
    }),
    
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await queryFulfilled;
        localStorage.removeItem(LS_ACCESS_TOKEN_KEY);
      },
    }),
    
    refreshToken: builder.query<AuthResponse, void>({
      query: () => '/auth/refresh',
    }),
    
    getProfile: builder.query({
      query: () => '/auth/profile',
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useLazyRefreshTokenQuery,
  useGetProfileQuery,
} = authApi;