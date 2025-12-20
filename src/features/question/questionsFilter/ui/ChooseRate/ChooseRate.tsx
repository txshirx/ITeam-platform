import { FilterButton } from '@/shared/ui/components'

import styles from './ChooseRate.module.css'
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'

const RATE_ITEMS = [1, 2, 3, 4, 5]

export const ChooseRate = () => {

    const { updateFilters } = useFilterQuery()

    const rateHandler = (item: number) => {
        updateFilters('rate', [item])
    }

    return (
        <div className={styles.filterItem}>
            <h3>Уровень сложности</h3>
            <div className={styles.rateContainer}>
                {RATE_ITEMS.map(item => (
                    <FilterButton action={() => rateHandler(item)} filter={'rate'} key={item} title={item.toString()} data={item.toString()}/>
                ))}
            </div>  
        </div>
    )
}