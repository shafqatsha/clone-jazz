import React from 'react'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

const Master = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className='md:max-w-[1140px] mx-auto'>
                <Breadcrumbs />
                {children}
            </div>
        </>
    )
}

export default Master