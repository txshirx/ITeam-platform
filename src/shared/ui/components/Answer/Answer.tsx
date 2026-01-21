import { useState } from "react";

export const Answer = ({ answer } : { answer: string }) => {
    const [state, _] = useState(() => {
        const regex = /(background(?:-color)?\s*:\s*)[^;]+(;|\s*$)/gi;
        return answer.replace(regex, `$1${'#282828'}$2`);
    })

    if (!answer) return null



    return (
        <div style={{ color: 'var(--text-card)', backgroundColor: "#282828", background: "#282828", }} dangerouslySetInnerHTML={{ __html: state }} />
    )
}