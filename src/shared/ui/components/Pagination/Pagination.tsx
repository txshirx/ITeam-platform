import { arrayFromTwoNumbers } from "@/shared/libs";

import styles from './Pagination.module.css'

type PaginationProps = {
    onPrevPageClick: () => void;
    onNextPageClick: () => void;
    onChangePage: (value: number) => void;
    page: number;
    totalPages: number;
}

export const Pagination = ({
	onPrevPageClick,
	onNextPageClick,
	onChangePage,
	page,
	totalPages,
}: PaginationProps) => {

    const changePageHandler = (newPage: number) => {
        if (newPage !== page) onChangePage(newPage)
    }

    const endPage = Math.min(totalPages, Math.max(1, page - 3) + 5)
    const startPage = Math.max(1, endPage - 5)

    const twoNumbersArray = arrayFromTwoNumbers(startPage === 1 ? 2 : startPage, endPage === totalPages ? totalPages - 1 : endPage)

    return (
        <div className={styles.paginationContainer}>
            <button onClick={onPrevPageClick}>Назад</button>
            <button 
                key={twoNumbersArray[0]} 
                style={{color: startPage === page ? 'var(--main-yeahub)' : 'none'}}
                onClick={() => changePageHandler(1)}
            >
                1
            </button>
            <div className={styles.arrayContainer}>
                {twoNumbersArray.map(item => (
                    <button style={{ color: (page === item && (page !== 1) && (page !== totalPages)) ? 'var(--main-yeahub)' : 'none' }} key={item}>{item}</button>
                ))}
            </div>
            <button 
                key={twoNumbersArray.at(-1)} 
                style={{color: endPage === page ? 'var(--main-yeahub)' : 'none'}}
                onClick={() => changePageHandler(totalPages)}
            >
                {totalPages}
            </button>
            <button onClick={onNextPageClick}>Далее</button>
        </div>
    )
}