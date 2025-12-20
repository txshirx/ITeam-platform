import { FilterButton } from '@/shared/ui/components'
import styles from './ChooseSkills.module.css'
import { skillsApi } from '@/entities/skills'
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'


export const ChooseSkills = () => {
    const { data, isLoading } = skillsApi.useGetSkillsQuery()
    const { updateFilters } = useFilterQuery()

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