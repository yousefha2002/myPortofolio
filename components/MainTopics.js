'use client'
import React from 'react'
import { BiUser,BiCategory } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import TopicBox from './TopicBox';
import { usePathname } from 'next/navigation';

const topics = [
    {
        title:"About",
        link:'',
        icon:BiUser,
        id:1
    },
    {
        title:"Skills",
        link:'skills',
        icon:GiSkills,
        id:2
    },
    {
        title:"Works",
        link:'works',
        icon:BiCategory,
        id:3
    },
    {
        title:"Resume",
        link:'resume',
        icon:AiOutlineFilePdf,
        id:4
    },
]

export default function MainTopics() {
    const path = usePathname();
    const isActiveLink = (pathname) => {
        return path === pathname;
    };

    return (
        <div className='flex justify-center gap-2 flex-wrap'>
            {
                topics.map(item=><TopicBox isActiveLink={isActiveLink} key={item.id} item={item}/>)
            }
        </div>
    )
}