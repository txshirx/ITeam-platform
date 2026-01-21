import { Pagination } from "@/shared/ui/components"

type QuestionsPaginationProps = {
    onChangePage: (value: number) => void;
    page: number;
    totalPages: number;
}

export const QuestionsPagination = ({
    onChangePage,
    page,
    totalPages
}: QuestionsPaginationProps) => {

    const onNextPageClick = () => {
        onChangePage(page + 1)
    } 

    const onPrevPageClick = () => {
        onChangePage(page - 1)
    }

    return (
        <div>
            <Pagination
                onChangePage={() => {}}
                onNextPageClick={onNextPageClick}
                onPrevPageClick={onPrevPageClick}
                totalPages={112}
                page={111}
            />
        </div>
    )
}