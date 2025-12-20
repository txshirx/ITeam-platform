import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'
import styles from './ChooseSpecializations.module.css'
import { specializationsApi } from '@/entities/specializations'
import { FilterButton } from '@/shared/ui/components'

export const ChooseSpecializations = () => {
    const { data, isLoading } = specializationsApi.useGetSpecializationsQuery()
    const { updateFilters } = useFilterQuery()

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Специализация</h3>
                <div className={styles.specializationsContainer}>
                    {data?.data.map(item => (
                        <FilterButton action={() => updateFilters('specialization', item.id)} key={item.id} title={item.title} filter='specialization' data={String(item.id)}/>
                    ))}
                </div>  
                
            </div>
        </div>
    )
}