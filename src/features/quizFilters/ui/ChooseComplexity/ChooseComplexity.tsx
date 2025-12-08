
import styles from './ChooseComplexity.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'
import { FilterButton } from "../FilterButton/FilterButton"
import { COMPLEXITY } from '@/shared/constants'

export const ChooseComplexity = () => {
    const { updateFilters } = useFilterParams()

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Уровень сложности</h3>
                <div className={styles.complexityContainer}>
                    {(Object.entries(COMPLEXITY)).map(item => (
                        <FilterButton action={() => {updateFilters('complexity', item[1]), console.log(item[1].join(','))}} filter={'complexity'} key={item[0]} title={item[0]} data={item[1].join(',')}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}