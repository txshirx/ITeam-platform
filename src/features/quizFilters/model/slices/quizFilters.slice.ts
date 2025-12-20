import type { FiltersParamsType, ModeType } from "@/shared/config/api/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: FiltersParamsType = {
    limit: 10,
    skills: [],
    complexity: [],
    mode: 'RANDOM',
    specialization: 11
}

export const quizFiltersSlice = createSlice({
    name: 'quizFilters',
    initialState: initialState,
    reducers: {
        incrementCount: (state) => {
            if (state.limit) {
                state.limit = state.limit + 1
            }
        },
        decrementCount: (state) => {
            if (state.limit && state.limit !== 1) {
                state.limit = state.limit - 1
            }
        },
        changeComplexity: (state, action: PayloadAction<{ value: number[] }>) => {
            if (state.complexity && !state.complexity.some(item => action.payload.value.includes(item))) {
                state.complexity = [...state.complexity, ...action.payload.value]
            } else if (state.complexity) (
                state.complexity = state.complexity.filter(item => !action.payload.value.includes(item))
            )
        },
        changeSkills: (state, action: PayloadAction<{ skill: number }>) => {
            if (state.skills && !state.skills.includes(action.payload.skill)) {
                state.skills = [...state.skills, action.payload.skill]
            } else if (state.skills) {
                state.skills = state.skills.filter(item => item !== action.payload.skill)
            }
        },
        addMode: (state, action: PayloadAction<{ mode: ModeType }>) => {
            state.mode = action.payload.mode
        },
        changeSpecializations: (state, action: PayloadAction<{ id: number }>) => {
            state.specialization = action.payload.id
        }   
    },
    selectors: {
        selectCount: (state) => state.limit,
        selectFilter: (state, filter: keyof FiltersParamsType) => state[filter],
        selectAllParams: (state) => state
    }
})