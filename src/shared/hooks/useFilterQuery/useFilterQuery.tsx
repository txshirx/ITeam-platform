import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ROUTES } from "@/shared/config/router/routes";
import { DEFAULT_MODE, DEFAULT_LIMIT_VALUE, REACT_DEVELOPER_ID } from "@/shared/constants";


type ModeType = 'NEW' | 'REPEAT' | 'RANDOM'

export interface FilterFromUser {
	skills?: number[];
	complexity?: number[];
	rate?: number[];
	title?: string;
	page?: number;
	specialization?: number | number[];
    limit?: number,
    mode?: ModeType,
    total?: number;
}

export const useFilterQuery = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === ROUTES.QUIZ.CREATE) {
            if (!searchParams.get('mode')) {
                params.set('mode', DEFAULT_MODE)
            }
            if (!searchParams.get('limit') || Number(searchParams.get('limit')) > 100 || Number(searchParams.get('limit')) <= 0 || !Number(searchParams.get('limit'))) {
                params.set('limit', String(DEFAULT_LIMIT_VALUE))
            }
            if (!searchParams.get('specialization')) {
                params.set('specialization', String(REACT_DEVELOPER_ID))
            }
        } else if (location.pathname === ROUTES.QUESTIONS) {
            if (!searchParams.get('specialization')) {
                params.set('specialization', String(REACT_DEVELOPER_ID))
            }
        }

        setSearchParams(params)
    }, [searchParams])

    const filtersParams: FilterFromUser = useMemo(() => {
        const filter: FilterFromUser = {
            skills: searchParams.get('skills') ? searchParams.get('skills')!.split(',').map(item => Number(item)) : [],
            specialization: searchParams.get('specialization') ? Number(searchParams!.get('specialization')) : REACT_DEVELOPER_ID,
            limit: (searchParams.get('limit') && Number(searchParams.get('limit')) > 0 && Number(searchParams.get('limit')) < 100)? Number(searchParams!.get('limit')) : DEFAULT_LIMIT_VALUE,
            complexity: searchParams.get('complexity') ? searchParams.get('complexity')!.split(',').map(item => Number(item)) : [],
            mode: searchParams.get('mode') ? searchParams.get('mode') as ModeType : DEFAULT_MODE,
            rate: searchParams.get('rate') ? searchParams.get('rate')!.split(',').map(item => Number(item)) : [],
            title: searchParams.get('title') ? searchParams.get('title') as string : '',
            page: searchParams.get('page') ? Number(searchParams.get('page')) : undefined,
        }
        return filter
    }, [searchParams])  

    const updateFilters = useCallback((filter: keyof FilterFromUser, value: number | number[] | string | ModeType) => {
        const params = new URLSearchParams(searchParams)
        if (Array.isArray(value)) {
            const validValue = value.map(item => String(item))
            const data = params.get(filter)?.split(',')
            if (!params.get(filter)?.split(',').some(item => validValue.includes(item))) {
                const appendData = (data ? [...data, ...validValue] : [...validValue]).join(',')
                params.set(filter, appendData)
            } else {
                const appendData = (data ? data.filter(item => !validValue.includes(item)) : []).join(',')
                params.delete(filter)
                appendData.length !== 0 ? params.append(filter, appendData) : null
            }
        } else {
            params.delete(filter)
            params.append(filter, value.toString())
        }
        setSearchParams(params)
    }, [params])

    return { updateFilters, filtersParams }
}