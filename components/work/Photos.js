'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Photos({images}) {
    return (
        <div className='my-[20px]'>
            <Swiper
            pagination={{
            type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                images?.map((image,index)=>
                    {
                        return(
                            <SwiperSlide key={index}>
                                <Image alt="load..." src={`/images/${image}`} width={400} height={200} className="w-full"/>
                            </SwiperSlide>
                        )
                    })
            }
        </Swiper>
        </div>
    )
}
