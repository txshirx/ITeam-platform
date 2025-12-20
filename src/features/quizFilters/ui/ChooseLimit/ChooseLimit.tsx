import { MinusIcon, PlusIcon } from '@/shared/ui/icons'
import styles from './ChooseLimit.module.css'
import { useFilterQuery } from '@/shared/hooks/useFilterQuery/useFilterQuery'

export const ChooseLimit = () => {
    const { updateFilters, filtersParams } = useFilterQuery()

    const plusHandler = () => {
        if (filtersParams.limit && filtersParams.limit < 100) {
            updateFilters('limit', filtersParams.limit + 1)
        }
    }

    const minusHandler = () => {
        if (filtersParams.limit && filtersParams.limit > 1) {
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