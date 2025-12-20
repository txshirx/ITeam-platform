import styles from './ChooseMode.module.css'
import type { ModeType } from "@/shared/config/api/types"
import { MODE } from '@/shared/constants'
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'
import { FilterButton } from '@/shared/ui/components'

export const ChooseMode = () => {
    const { updateFilters } = useFilterQuery()

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Выберите режим</h3>
                <div className={styles.modeContainer}>
                    {(Object.values(MODE)).map((item, ind) => (
                        <FilterButton action={() => updateFilters('mode', item.value as ModeType)} filter='mode' key={ind} title={item.title} data={item.value}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}