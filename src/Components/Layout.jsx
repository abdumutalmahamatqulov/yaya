import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Forma from '../Page/Forma'
import Download from '../Page/Download'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet/>
            {/* <Forma/> */}
            <Footer/>
        </>
    )
}
