export const Answer = ({ answer } : { answer: string }) => {

    if (!answer) return null

    return (
        <div style={{ color: 'var(--text-card)' }} dangerouslySetInnerHTML={{ __html: answer }} />
    )
}