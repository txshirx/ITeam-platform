
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'
import styles from './Search.module.css'
import React, { useEffect, useState } from 'react'
import { useDebaunce } from '@/shared/hooks/useDebaunce/useDebaunce'

export const Search = () => {
    const [inputValue, setInputValue] = useState('')
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