import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FiltersParamsType } from "@/shared/config/api/types"
import { DEFAULT_LIMIT_VALUE, DEFAULT_MODE, REACT_DEVELOPER_ID } from "@/shared/constants"

type QuizType = {
    getNewQuizFlag: boolean,
    filterParams: FiltersParamsType,
}

const initialState: QuizType = {
    getNewQuizFlag: true,
    filterParams: {
        skills: [],
        specialization: REACT_DEVELOPER_ID,
        mode: DEFAULT_MODE,
        complexity: [],
        limit: DEFAULT_LIMIT_VALUE
    }
}

export const newQuizSlice = createSlice({
    name: 'newQuiz',
    initialState: initialState,
    reducers: {
        changeQuizFlag: (state) => {
            state.getNewQuizFlag = false
        },
        addFiltersParams: (state, action: PayloadAction<{ params: FiltersParamsType }>) => {
            state.filterParams = {...action.payload.params}
        }
    },
    selectors: {
        selectNewQuizFlag: (state) => state.getNewQuizFlag,
        selectFilterParams: (state) => state.filterParams
    }
})