import { SkillsButtonIcon } from "@/shared/ui/icons"
import { useEffect, useState } from "react"
import styles from './FilterButton.module.css'
import { useSearchParams } from "react-router-dom"
import type { FiltersParamsType } from "@/shared/config/api/types"

type FilterButtonsType = { 
    imageSrc?: string,
    data: string,
    title: string,
    action: () => void,
    filter: keyof FiltersParamsType 
}


export const FilterButton = ({ imageSrc, data, title, action, filter } : FilterButtonsType) => {
    const [searchParams] = useSearchParams()
    const [isError, setIsError] = useState(false)
    const [isActive, setIsActive] = useState(() => searchParams.get(filter)?.split(',').some(item => data.split(',').includes(item)))

    useEffect(() => {
        setIsActive(searchParams.get(filter)?.split(',').some(item => data.split(',').includes(item)))
    }, [searchParams])

    return (    
        <button className={isActive ? styles.isActive : styles.default} onClick={() => action()} key={data}> 
            {imageSrc && !isError ? 
                (<img 
                    src={imageSrc}
                    onError={() => setIsError(true)}
                    className={styles.filterImage}
                />) 
                : imageSrc ?
                (
                    <SkillsButtonIcon/>
                ) : null
            }
            {title}
        </button>
    )
}