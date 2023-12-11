import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

import { useState } from 'react';
interface NavBar {
    icon: IconName,
    text: string,
    isActive: boolean,
    hasChildren: boolean,
    children: Array<string>,
}
const Header = () => {

    const [navBar, setNavBar] = useState<Array<NavBar>>([
        {
            icon: 'angle-down',
            text: '',
            isActive: false,
            hasChildren: true,
            children: ['Business', 'JazzCash', 'Jazzxlr8'],
        },
        {
            icon: 'caret-down',
            text: 'PREPAID',
            isActive: false,
            hasChildren: true,
            children: [
                'All Offers', 'Data', 'All in one offers',
                'Location Based Offers', 'Products & Services',
                'International Services', 'Other Offers', 'Just For You'
            ],
        },
        {
            icon: 'caret-down',
            text: 'POSTPAID',
            isActive: false,
            hasChildren: true,
            children: ['Price Plans', 'Offers', 'Products & Services', 'International Services'],
        },
        {
            icon: 'caret-down',
            text: 'DEVICES',
            isActive: false,
            hasChildren: true,
            children: [
                'All Devices',
                '4G Devices'
            ],
        },
        {
            icon: 'caret-down',
            text: 'MOBILE APPS',
            isActive: false,
            hasChildren: false,
            children: [],
        },
        {
            icon: 'caret-down',
            text: 'PRODUCT AND SERVICES',
            isActive: false,
            hasChildren: true,
            children: ['Prepaid', 'Postpaid'],
        },
    ])

    const [activeNavBar, setActiveNavBar] = useState<NavBar>(navBar[0]);

    function handleOnNavClick(index: number) {
        let newNavBar: NavBar[] = navBar.slice();
        newNavBar = newNavBar.map((item, itemIndex) => {
            if (itemIndex == index) {
                item.isActive = !item.isActive;
            } else {
                item.isActive = false;
            }

            if (item.isActive) {
                item.icon = itemIndex === 0 ? 'angle-up' : 'caret-up';
            } else {
                item.icon = itemIndex === 0 ? 'angle-down' : 'caret-down';
            }
            return item
        })

        setNavBar([...newNavBar]);
        setActiveNavBar(newNavBar[index]);
    }

    const headers = navBar.map((item, index) => {

        if (index === 0) {
            let classNames: string = 'cursor-pointer';
            if (item.isActive) {
                classNames += ' text-red-600';
            }
            return (<div className='flex  items-center gap-2 ' key={index}>
                <div className="my-2 p-0 after:border after:border-solid after:h-[20px] flex items-center gap-2">
                    <img width={55 + 'px'} src="/src/assets/imgs/logo-desk-new.png" alt="" />
                </div>
                <div onClick={() => handleOnNavClick(index)} className={classNames}>
                    <FontAwesomeIcon icon={['fas', item.icon]} flip="horizontal" />
                </div>
            </div>)
        }
        else
            return <div key={index}>
                <button onClick={() => handleOnNavClick(index)} className={`transition-all font-[400] text-[#727375] ${item.isActive ? ' text-red-600' : ''}`}>
                    {item.text}
                    {item.hasChildren && <FontAwesomeIcon className="ms-2 " icon={['fas', item.icon]} />}
                </button>
            </div>
    })
    const childrens = activeNavBar.children.map(childItem =>
        <div className="" key={childItem} >
            {childItem.toUpperCase()}
        </div>
    )
    const navBarChildrens = activeNavBar.isActive && <div className='  container mx-auto'>
        <div className="flex gap-4 py-3 text-sm justify-center ">
            {childrens}
        </div>
    </div>
    return (
        <>
            <div className=" border-b-gray-300 border-b-[1px] ">
                <div className='md:max-w-[1140px] container mx-auto'>
                    <div className="flex items-center gap-3 text-sm ">
                        {headers}
                    </div>
                </div>
                <div style={
                    {
                        display: activeNavBar.hasChildren ? 'block' : 'none'
                    }
                } className='bg-[#f5f5f5] '>
                    {navBarChildrens}
                </div>
            </div>
        </>
    )
}

export default Header;