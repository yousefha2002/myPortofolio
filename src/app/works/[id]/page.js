import React from 'react'
import works from '../../../../utils/works'
import Photos from '../../../../components/work/Photos'
import TechnicalSheet from '../../../../components/work/TechnicalSheet'
import Roles from '../../../../components/work/Roles'
import Link from 'next/link'

export default function Page({params}) {
    const work = works.find(work=>work.id.toString()===params.id.toString())
    return (
        <div className='my-[55px] flex justify-center'>
            <div className='w-[70%] margin-x-auto'>
                <h3 className='text-[24px] font-[600] mb-2'>{work.title}</h3>
                <h4 className='mb-4'>{work.headline}</h4>
                {work.link&&
                <Link target='_black' href={`${work.link}`}
                className='text-white bg-[#066ac9] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Live Link
                </Link>}
                <TechnicalSheet skills={work.skills}/>
                <Photos images={work.images}/>
                <Roles about={work.about}/>
            </div>
        </div>
    )
}
