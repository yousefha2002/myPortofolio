import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center'>
            <a download={true} href={'/uploads/Yousef.pdf'}>
                <div className='bg-black text-white px-6 py-2 rounded-[100px]'>Download</div>
            </a>
        </div>
    )
}
