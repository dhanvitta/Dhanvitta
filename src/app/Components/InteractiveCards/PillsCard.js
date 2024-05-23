import React from 'react'

function PillsCard({ features, color = 'green' }) {
    const theme = {
        green: {
            primary: 'text-3xl text-yellow-600 font-semibold rounded-xl even:text-left even:animate-pulse odd:text-right',
        },
        yellow: {
            primary: 'text-3xl text-yellow-600 font-semibold rounded-xl even:text-left even:animate-pulse odd:text-right',
        },
        cyan: {
            primary: 'text-3xl text-cyan-600 font-semibold rounded-xl even:text-left even:animate-pulse odd:text-right my-3',
        }
    }

    return (

        <div className={theme[color]?.primary}>{features}</div>
    )
}

export default PillsCard