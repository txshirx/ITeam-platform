import styles from './ChooseSpecializations.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'
import { FilterButton } from '../FilterButton/FilterButton'
import { specializationsApi } from '@/entities/specializations'

export const ChooseSpecializations = () => {
    const { data, isLoading } = specializationsApi.useGetSpecializationsQuery()
    const { updateFilters } = useFilterParams()

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Специализация</h3>
                <div className={styles.specializationsContainer}>
                    {data?.data.map(item => (
                        <FilterButton action={() => updateFilters('specializations', item.id)} key={item.id} title={item.title} filter='specializations' data={String(item.id)}/>
                    ))}
                </div>  
                
            </div>
        </div>
    )
}