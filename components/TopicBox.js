import Link from 'next/link'
import React from 'react'

export default function TopicBox({item,isActiveLink}) {
    return (
        <Link href={`/${item.link}`}>
            <div className={`shadow-2xl rounded-[8px] w-[80px] h-[80px] flex justify-center items-center flex-col
            ${isActiveLink(`/${item.link}`)?'active':''}`}>
                <div className='flex justify-center mb-1'><item.icon className="text-[18px]"/></div>
                <h3 className='text-[14px] font-[500]'>{item.title}</h3>
            </div>
        </Link>
    )
}
