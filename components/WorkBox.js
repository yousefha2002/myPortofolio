import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkBox({item}) {
    return (
        <Link href={`/works/${item.id}`}>
            <div className='h-[200px] drop-shadow-2xl hover:-translate-y-3 duration-300'>
                <Image src={`/images/${item.images[0]}`} height={200} width={1000} className='max-w-full h-full'/>
            </div>
        </Link>
    )
}
