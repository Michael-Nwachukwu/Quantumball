import { useState, useEffect } from "react";


const Navbar = () => {

    const [dropDown, setdropdown] = useState(null);
    const [mobileNav, setmobileNav] = useState(null);
    const [isdropdownActive, setisdropdownActive] = useState(null)


    const handleDrop = () => {

        if (!dropDown) {
            setdropdown(true);
        }else{
            setdropdown(null);
        }
    }

    const toggleMobileDropdown = () => {

        if (!isdropdownActive) {
            setisdropdownActive(true);
        }else{
            setisdropdownActive(null);
        }
    }

    const toggleNav = () => {

        if (!mobileNav) {
            setmobileNav(true);

        }else{
            setmobileNav(null);
            // set mobile nav dropdown menu to false when you clear the mobile nav view
            setisdropdownActive(null);
            
        }
    }

    return ( 
        
        <nav className="bg-transparent border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">

                <a href="https://flowbite.com" className="flex items-center">
                    <img src={'qtb-removebg-preview.png'} width={150} className="h-6 mr-3 sm:h-6" alt="QuantumBall" />
                    {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </a>

                {/* <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <div className="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </button> */}

                <div onClick={ () => toggleNav() } className="burger md:hidden bg-[#826D5C]">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 mt-4 text-yellow-500 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button onClick={ () => handleDrop() } id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>  

            </div>

            { dropDown && <div id="mega-menu-full-dropdown" className="absolute w-full mt-1 bg-[#2b2b2b] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))]">

                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white backdrop-blur-3xl dark:text-white sm:grid-cols-2 md:px-6">
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">3rd Party Software</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">Intelligent Systems</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">Devices Programming</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">Online Stores</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">Consultancy Services</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold group-hover:text-black">Marketing CRM</div>
                                <span className="text-sm font-light text-gray-300 group-hover:text-black dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div> }


            { mobileNav && 
                <nav className={`fixed top-0 w-full h-screen z-50 bg-[#2b2b2b] [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-white ${!mobileNav ? "open" : ""}`}>
                    <div className="flex items-center justify-between px-8 py-6">
                        <div className="flex items-center">
                            <img src={'qtb-single.png'} alt="Logo" className="w-14 h-12 mr-2"/>
                        </div>
                        <button onClick={ () => toggleNav() } className="text-[#826D5C] focus:outline-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 py-6">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg text-[#BFAEA0] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button onClick={ () => toggleMobileDropdown() } id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                
                                { isdropdownActive &&  
                                    <div className="grid max-w-screen-xl px-2 z-0 rounded-lg py-3 mx-auto bg-slate-700 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] text-slate-50 dark:text-white sm:grid-cols-2 md:px-6">
                                        <ul>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Online Stores</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Segmentation</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Marketing CRM</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Online Stores</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Segmentation</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-3 py-1 rounded-lg hover:bg-gray-100 hover:text-black">
                                                    <div className="text-sm font-semibold">Marketing CRM</div>
                                                    <span className="text-xs font-light text-gray-300 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> 
                                }
                               
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
              
            }
        
        
        </nav>



    );

    return {mobileNav};
}
 
export default Navbar;