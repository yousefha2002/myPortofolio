import React from 'react'
import RoleBox from './RoleBox'

export default function Roles({about}) {
    return (
        <div>
            {
                about?.map((item,index)=>
                {
                    return <RoleBox item={item} key={index+'q1'}/>
                })
            }
        </div>
    )
}
