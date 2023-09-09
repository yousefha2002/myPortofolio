import React from 'react'
import MainTitle from '../ui/MainTitle'
import BreakLine from '../ui/BreakLine'
import PartTitle from '../ui/PartTitle'

export default function RoleBox({item}) {
    return (
        <div className='my-[40px]'>
            <MainTitle title={item.role}/>
            <BreakLine/>
            {
                item.functions.map((text,index)=><PartTitle title={text} key={index+'1'}/>)
            }
        </div>
    )
}
