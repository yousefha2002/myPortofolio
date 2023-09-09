import React from 'react'
import MainTitle from '../ui/MainTitle'
import PartTitle from '../ui/PartTitle'
import BreakLine from '../ui/BreakLine'

export default function TechnicalSheet({skills}) {
    return (
        <div className='my-[40px]'>
            <MainTitle title="Technical Sheet"/>
            <h4 className='text-[16px]'>Code technologies and skills I got involved with while working on this project.</h4>
            <BreakLine/>
            <ul className=' list-[circle] px-4'>
                {
                    skills?.map((skill,index)=><PartTitle key={index} title={skill}/>)
                }
            </ul>
        </div>
    )
}
