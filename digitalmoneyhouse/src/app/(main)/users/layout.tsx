import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export default function Layout({children}:{children: React.ReactNode}){
    return (<>
        <Navbar/>
        {children}
    </>)
}