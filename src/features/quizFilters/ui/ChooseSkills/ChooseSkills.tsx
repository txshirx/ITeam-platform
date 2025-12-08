import styles from './ChooseSkills.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'
import { FilterButton } from '../FilterButton/FilterButton'
import { skillsApi } from '@/entities/skills'


export const ChooseSkills = () => {
    const { data, isLoading } = skillsApi.useGetSkillsQuery()
    const { updateFilters } = useFilterParams()

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Категории вопросов</h3>
                
                <div className={styles.skillsContainer}>
                    {data?.data.map(item => (
                        <FilterButton action={() => updateFilters('skills', [item.id])} key={item.id} filter='skills' imageSrc={item.imageSrc} title={item.title} data={String(item.id)}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}