import styles from './ChooseMode.module.css'
import type { ModeType } from "@/shared/config/api/types"
import { useFilterParams } from "../../model/hooks/useFilterParams"
import { FilterButton } from "../FilterButton/FilterButton"
import { MODE } from '@/shared/constants'

export const ChooseMode = () => {
    const { updateFilters } = useFilterParams()

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