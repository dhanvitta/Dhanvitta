import React from 'react'

function FeaturesCard({ features = {}, color = 'green' }) {
    const theme = {
        green: {
            primary: 'text-2xl text-emerald-600 font-semibold',
            secondary: 'mt-4 text-lg text-emerald-500 font-medium'
        },
        yellow: {
            primary: 'text-2xl text-yellow-600 font-semibold',
            secondary: 'mt-4 text-lg text-yellow-500 font-medium'
        }
    }
    const { feature, description } = features;

    return (
        <div className='h-48 flex flex-col w-full '>
            <h1 className={theme[color]?.primary}>{feature}</h1>
            <h3 className={theme[color]?.secondary}>{description} </h3>
        </div >
    )
}

export default FeaturesCard