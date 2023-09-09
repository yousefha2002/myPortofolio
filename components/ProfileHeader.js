import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function ProfileHeader() {
    return (
        <div className='mt-10 mb-6 flex justify-center'>
            <div className='flex flex-col'>
                <img src={'/images/protofoilio.png'} 
                className='w-85 h-85 rounded-full'/>
                <h3 className='my-3 font-[500] text-[20px] text-center'>Yousef Abohani</h3>
                <div className='flex gap-2 items-center justify-center'>
                    <SocialIcon target='blank' url="https://api.whatsapp.com/send/?phone=%2B972592374719&text&type=phone_number&app_absent=0" style={{height:25,width:25}}/>
                    <SocialIcon target='blank' url="https://www.facebook.com/profile.php?id=100012907182033" style={{height:25,width:25}}/>
                    <SocialIcon target='blank' url="https://github.com/yousefha2002" style={{height:25,width:25}}/>
                </div>
            </div>
        </div>
    )
}
