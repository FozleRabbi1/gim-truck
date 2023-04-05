import React, { useState } from 'react';
import "./NaveBar.css";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';

const NaveBar = () => {
    // const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0'>
            <nav className="bg-gray-800 ">
                {/* <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex  items-center justify-between h-16">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/ditles"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                       Show-Ditles
                                    </Link>

                                    <Link
                                        to="/dashbord"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashbord
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact-Us
                                    </Link>

                                    <Link
                                        to="/users"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Users
                                    </Link>
                                </div>
                            </div>

                            {/* <div className='bg-green-500 ms-auto'>
                                <input type="text" />
                                <button className='text-white'>search</button>
                            </div> */}

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                            

                        </div>

                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                                </a>
                            </div>
                            {/* <div>
                                <input type="text" />
                                <button className='text-white'>search</button>
                            </div> */}
                        </div>
                    )}
                </Transition>
            </nav>

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header> */}
            {/* <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main> */}
        </div>




        // <nav className="w-full bg-purple-500 shadow">
        //     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        //         <div>
        //             <div className="flex items-center justify-between py-3 md:py-5 md:block">
        //                 <a href="javascript:void(0)">
        //                     <h2 className="text-2xl font-bold text-white">LOGO</h2>
        //                 </a>
        //                 <div className="md:hidden">
        //                     <button
        //                         className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        //                         onClick={() => setNavbar(!navbar)}
        //                     >
        //                         {navbar ? (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 viewBox="0 0 20 20"
        //                                 fill="currentColor"
        //                             >
        //                                 <path
        //                                     fillRule="evenodd"
        //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        //                                     clipRule="evenodd"
        //                                 />
        //                             </svg>
        //                         ) : (
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-6 h-6 text-white"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth={2}
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M4 6h16M4 12h16M4 18h16"
        //                                 />
        //                             </svg>
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div
        //                 className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
        //                     }`}
        //             >
        //                 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        //                     <li className="text-white hover:text-indigo-200">
        //                         <a href="javascript:void(0)">Home</a>
        //                     </li>
        //                     <li className="text-white hover:text-indigo-200">
        //                         <a href="javascript:void(0)">Blog</a>
        //                     </li>
        //                     <li className="text-white hover:text-indigo-200">
        //                         <a href="javascript:void(0)">About US</a>
        //                     </li>
        //                     <li className="text-white hover:text-indigo-200">
        //                         <a href="javascript:void(0)">Contact US</a>
        //                     </li>
        //                 </ul>

        //                 <div className="mt-3 space-y-2 lg:hidden md:inline-block">
        //                     <a
        //                         href="javascript:void(0)"
        //                         className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
        //                     >
        //                         Sign in
        //                     </a>
        //                     <a
        //                         href="javascript:void(0)"
        //                         className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
        //                     >
        //                         Sign up
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="hidden space-x-2 md:inline-block">
        //             <a
        //                 href="javascript:void(0)"
        //                 className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
        //             >
        //                 Sign in
        //             </a>
        //             <a
        //                 href="javascript:void(0)"
        //                 className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
        //             >
        //                 Sign up
        //             </a>
        //         </div>
        //     </div>
        // </nav>









        // <div>
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li><a>Item 1</a></li>
        //                     <li tabIndex={0}>
        //                         <a className="justify-between">
        //                             Parent
        //                             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        //                         </a>
        //                         <ul className="p-2">
        //                             <li><a>Submenu 1</a></li>
        //                             <li><a>Submenu 2</a></li>
        //                         </ul>
        //                     </li>
        //                     <li><a>Item 3</a></li>
        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><a>Item 1</a></li>
        //                 <li tabIndex={0}>
        //                     <a>
        //                         Parent
        //                         <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        //                     </a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             <a className="btn">Get started</a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default NaveBar;