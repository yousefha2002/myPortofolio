import React from 'react'

const skills = ['HTML','CSS','JavaScript','SCSS','Tailwind','Bootstrap','Material Ui','ReactJs','NextJs',
'React Query','Redux Toolkit','NodeJs','ExpressJs','NestJs',"React Native"]

export default function page() {
    return (
        <div className="w-[70%] m-auto text-center mb-10">
            <div className='flex gap-x-2 gap-y-4 items-center flex-wrap justify-center'>
                {
                    skills.map((item,index)=>
                    {
                        return(
                            <div className='bg-white px-4 py-2 rounded-full shadow-2xl' key={index}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
