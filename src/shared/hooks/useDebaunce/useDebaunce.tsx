import { useEffect, useState } from "react"

export const useDebaunce = (value: any, delay: number) => {
    const [debauncedValue, setDebauncedValue] = useState(value)

    useEffect(() => {
        const timerId = setTimeout(() => setDebauncedValue(value), delay) 

        return () => clearTimeout(timerId)
    }, [value, delay])

    return debauncedValue
}