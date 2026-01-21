
type RatingProps = {
    rate?: number | undefined,
    complexity?: number | undefined
    title?: string
}

export const RatingItem = ({ rate, complexity, title} : RatingProps) => {
    return (
        <>
            {title ? 
                (
                    <div>
                        <span>{title}</span>
                    </div>
                )
                :
                (
                    <div>
                        <span style={{ display: "flex", gap: 6, alignItems: 'center' }}>{rate ? 'Рейтинг' : 'Сложность'}<span style={{ backgroundColor: 'var(--main-yeahub)', padding: '2px 4px', borderRadius: 4, color: 'white'}}>{(rate ? rate : complexity) ?? 'неизвестно'}</span></span>
                    </div>
                )
            }

        </>
    )
}