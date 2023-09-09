import React from 'react'
import works from '../../../utils/works'
import WorkBox from '../../../components/WorkBox'

export default function page() {
    const reversedWords = works.reverse()
    return (
        <div className='grid sx:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mb-10 mt-8'>
        {
            reversedWords.map(item=>
                {
                    return <WorkBox item={item} key={item.id}/>
                })
        }
        </div>
    )
}
