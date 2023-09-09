import React from 'react'
import PartTitle from './PartTitle'

export default function MainTitle({title}) {
    return (
        <div>
            <h2 className='text-[20px] font-[600]'>{title}</h2>
        </div>
    )
}
