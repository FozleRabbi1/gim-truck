import React, { useState } from 'react';
import "./RowNav.css";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const RowNav = () => {
    const [visable, setVisabled] = useState(false);

    // const vissableFun = () => {
    //     setVisabled(true)
    // }
console.log(visable)
    const navLinks = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];


    return (
        <div>
            <nav>

                <ul className='lg:flex hidden lg:block'>
                    {
                        navLinks.map(navLink => <li className='mx-10'><a href={navLink.path}>{navLink.name}</a></li>)
                    }
                </ul>

                {
                    visable ? <XMarkIcon onClick={() => setVisabled(!visable)} className='h-6 w-6 lg:hidden' ></XMarkIcon> : <Bars3Icon onClick={() => setVisabled(!visable)} className='h-6 w-6 lg:hidden'></Bars3Icon>
                    
                }
                
                {/* <Bars3Icon onClick={vissableFun} className='h-6 w-6 lg:hidden'></Bars3Icon> */}

                {
                    visable && <ul className="lg:hidden duration-700">
                        {
                            navLinks.map(navLink => <li className='mx-10'><a href={navLink.path}>{navLink.name}</a></li>)
                        }
                    </ul>
                }


            </nav>

        </div>
    );
};

export default RowNav;