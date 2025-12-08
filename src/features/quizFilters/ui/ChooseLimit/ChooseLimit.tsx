import { MinusIcon, PlusIcon } from '@/shared/ui/icons'
import styles from './ChooseLimit.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'

export const ChooseLimit = () => {
    const { updateFilters, filtersParams } = useFilterParams()

    const plusHandler = () => {
        if (filtersParams.limit < 100) {
            updateFilters('limit', filtersParams.limit + 1)
        }
    }

    const minusHandler = () => {
        if (filtersParams.limit > 1) {
            updateFilters('limit', filtersParams.limit - 1)
        }
    }

    return (
        <div >
            <div className={styles.filterItem}>
                <h3>Количество вопросов</h3>
                <div className={styles.countButton}>
                    <div onClick={minusHandler}><MinusIcon/></div>
                    {filtersParams.limit}
                    <div onClick={plusHandler}><PlusIcon/></div>
                </div>
            </div>
        </div>
    )
} 