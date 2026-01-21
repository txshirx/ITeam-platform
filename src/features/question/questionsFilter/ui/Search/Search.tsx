import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'
import styles from './Search.module.css'
import React, { useEffect, useState } from 'react'
import { useDebaunce } from '@/shared/hooks/useDebaunce/useDebaunce'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
    const [searchParams, _] = useSearchParams()
    const [inputValue, setInputValue] = useState(searchParams.get('title') ?? '')
    const debauncedValue = useDebaunce(inputValue, 500)

    const { updateFilters } = useFilterQuery()

    useEffect(() => {
        updateFilters('title', debauncedValue)
    }, [debauncedValue])

    return (
        <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            placeholder='Введите название вопроса...' 
            className={styles.input}
            value={inputValue}
            type="text" 
        />
    )
}