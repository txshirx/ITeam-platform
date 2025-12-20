import { FilterButton } from '@/shared/ui/components'
import styles from './ChooseSpecializations.module.css'
import { specializationsApi } from '@/entities/specializations'
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'
import { useState } from 'react'

export const ChooseSpecializations = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data, isLoading } = specializationsApi.useGetSpecializationsQuery()
    const { updateFilters } = useFilterQuery()

    if (isLoading) return <>Loading...</>

    const visibleHandler = () => {
        setIsOpen(prev => !prev)
    } 

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Специализация</h3>
                <div className={styles.specializationsContainer}>
                    {(isOpen ? data?.data : data?.data.slice(0, 4))?.map(item => (
                        <FilterButton action={() => updateFilters('specialization', item!.id)} key={item.id} title={item.title} filter='specialization' data={String(item.id)}/>
                    ))}
                    <h4 onClick={visibleHandler}>{!isOpen ? "Показать все" : "Скрыть"}</h4>
                </div>
            </div>
        </div>
    )
}