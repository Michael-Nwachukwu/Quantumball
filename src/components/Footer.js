import myImage from "/Users/apple/Documents/Desktop/quantumball/src/images/footerbg3.jpg";
import Socials from "./Socials";
import { useInView } from "framer-motion";
import { useRef } from "react";


const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return ( 
 
        <footer style={{ backgroundImage: `url(${myImage})`}} className="bg-center bg-no-repeat bg-cover">
            <div className="pt-10 lg:pt-20 pb-10 flex justify-start ml-8 lg:ml-32">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-14 md:gap-4 lg:gap-24 text-slate-200 ">

                    <div className="">
                        <p className="text-lg font-bold block mb-5 text-zinc-500">Popular</p>
                        <ul className="font-light text-sm space-y-4">
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    Devices Programming
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    Services
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    3rd Party Software
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    Intelligent Systems
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <p className="text-lg font-bold block mb-5 text-zinc-500">Corporate</p>
                        <ul className="font-light text-sm space-y-4">
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    About Us
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <p className="text-lg font-bold block mb-5 text-zinc-500">Contact</p>
                        <ul className="font-light text-sm space-y-4">
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    support@quantumball.com.ng
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                092770668
                                </a>
                            </li>
                            <li className="hover:text-yellow-500 hover:underline">
                                <a href="">
                                    4th Floor Churchgate Towers, CBD Abuja 
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 mx-8 lg:mx-32 pb-10">
                <hr />
                <div ref={ref} className="flex justify-between items-center py-6 lg:px-6">
                    <div 
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                        }}
                    >
                        <img src={'qtb-removebg-preview.png'} alt="" className="w-[50%] lg:w-[20%]" />
                    </div>
                    <Socials />
                </div>
            </div>
        </footer>    
    );
}
export default Footer;
