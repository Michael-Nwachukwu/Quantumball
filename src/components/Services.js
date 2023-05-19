import { useState } from "react";
import myImage from "../images/servicebg1.jpg"
import { motion, AnimatePresence, variants,  useInView  } from "framer-motion";
import Button1 from "./elements/Button1";
import ServiceCard from "./elements/ServiceCard";
import { useRef } from "react";



    const Services = ({ children }) => {

        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });


        // const cardVariants = {
        //     offscreen: {
        //       y: 700,
        //       opacity: 0
        //     },
        //     onscreen: {
        //       opacity: 1,
        //       y: 0,
        //       transition: {
        //         type: "spring",
        //         bounce: 0.5,
        //         duration: 2
        //       }
        //     }

        //             // initial="offscreen"
        // // whileInView={isInView ? "onscreen" : "offscreen"}
        // // viewport={{ once: true, amount: 0.8 }}
        // <motion.div variants={cardVariants}>

        // };

        const services = ServiceCard();

        const [deviceProgramming, setdeviceProgramming] = useState(false);
        const [intelligentSoftware, setintelligentSoftware] = useState(true);
        const [allPlatforms, setallPlatforms] = useState(false);
        const [userExperience, setuserExperience] = useState(false);


        const devices = () => {

            if(!deviceProgramming) {
                setintelligentSoftware(false);
                setallPlatforms(false);
                setuserExperience(false);
                setdeviceProgramming(true);
            }

        }

        const intelligence = () => {

            if(!intelligentSoftware) {
                setallPlatforms(false);
                setuserExperience(false);
                setdeviceProgramming(false);
                setintelligentSoftware(true);
            }
            
        }

        const platforms = () => {

            if(!allPlatforms) {
                setuserExperience(false);
                setdeviceProgramming(false);
                setintelligentSoftware(false);
                setallPlatforms(true);
            }
            
        }

        const experience = () => {

            if(!userExperience) {
                setallPlatforms(false);
                setdeviceProgramming(false);
                setintelligentSoftware(false);
                setuserExperience(true);
            }
            // #f58634 #121212
        }

        return ( 
            <section ref={ref} style={{ backgroundImage: `url(${myImage})` }} className="bg-center bg-no-repeat bg-cover">
                <div 
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className="text-center font-bold text-[#404040] text-2xl md:text-3xl pt-6">
                    <span className="text-base font-light">OUR SERVICES</span> <br />
                    Elevating Businesses <br /> through Quantum Innovations.
                </div>
                <div 
                    style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                        }}
                    className="grid grid-cols-1 lg:grid-cols-3 pb-16"
                >

                    <div className="flex justify-center py-4">

                        <div className="flex flex-row justify-center py-3 mx-auto space-x-4 lg:flex-col lg:space-x-0 sm:py-0 lg:space-y-6 ">

                            <Button1 bigText="Intelligent Softwares" smallText="Softwares" toggle={intelligence} isActive={intelligentSoftware} />
                            
                            <Button1 bigText="Devices Programming" smallText="Devices" toggle={devices} isActive={deviceProgramming}/>

                            <Button1 bigText="All Platforms" smallText="Platforms" toggle={platforms} isActive={allPlatforms}/>

                            <Button1 bigText="User Experience" smallText="UX" toggle={experience} isActive={userExperience}/>

                        </div>

                    </div>

                    {/* bg-[#584e4e42] */}
                    <div className="lg:col-span-2 m-5 lg:mr-10 lg:mt-10">

                        {deviceProgramming && 

                            <AnimatePresence>
                                <motion.div 
                                    key={services[0].id}
                                    className="box"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                        }
                                    }}
                                >
                                    {services[0]}
                                </motion.div>
                            </AnimatePresence>
                        }

                        {intelligentSoftware && 
                            // <div className={`flex flex-col-reverse sm:flex-row justify-around items-center py-10 lg:py-16 sm:min-h-[30em]  transition-opacity ease-in-out delay-150 duration-700 visible ${deviceProgramming ? 'active' : '' } `}>
                            //     <div className="px-8 pb-5 space-y-3 text-left sm:pl-10 sm:w-1/2">
                            //         <div>
                            //             <p className="block text-sm text-yellow-900 uppercase">SMART APPS</p>
                            //             <h1 className="block text-4xl font-extrabold">Intelligent Software</h1>
                            //         </div>
                            //         <p className="block">
                            //             Smart intelligent systems, software, Apps & platforms with Artificial Intelligence according to specified requirements.Processes such as voice and facial recognition, and programmed automatic response systems that utilizies natural language processing to issue responses to humans are all encapsulated in our operations.
                            //         </p>
                            //         <div className="pt-5">
                            //             <a className="bg-[#2b2b2b] hover:text-white [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-white px-6 py-2 text-xs">Read more</a>
                            //         </div>
                            //     </div>
                            //     <div className="pb-8 text-center sm:w-1/2">
                            //         <img src={'intelligent software.png'} alt="" />
                            //     </div>
                            // </div>
                            <AnimatePresence>
                                <motion.div 
                                    key={services[0].id}
                                    className="box"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                        }
                                    }}
                                >
                                    {services[1]}
                                </motion.div>
                            </AnimatePresence>
                        }

                        {allPlatforms && 
                            // <div className={`flex flex-col-reverse sm:flex-row justify-around items-center py-10 lg:py-16 sm:min-h-[30em] ease-in-out delay-150 duration-700 visible ${deviceProgramming ? 'active' : '' }`}>
                            // <div className="px-8 pb-5 space-y-3 text-left sm:pl-10 sm:w-1/2">
                            //     <div>
                            //         <p className="block text-sm text-yellow-900 uppercase">DEVICE FLEXIBILITY</p>
                            //         <h1 className="block text-4xl font-extrabold">All Platforms</h1>
                            //     </div>
                            //     <p className="block">
                            //         All categories of Apps; Desktop, Web and Mobile based Applications. Systems, Portals, Platforms, Solutions etc. We build or customise an app, solution, system of any category depending on your specifics. There are tons of vendor-based software and solutions tailored for your diverse needs.
                            //     </p>
                            //     <div className="pt-5">
                            //         <a className="bg-[#2b2b2b] hover:text-white [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-white px-6 py-2 text-xs">Read more</a>
                            //     </div>
                            // </div>
                            // <div className="pb-8 text-center sm:w-1/2">
                            //     <img src={'platforms3.png'} alt="" />
                            // </div>
                            // </div>
                            <AnimatePresence>
                                <motion.div 
                                    key={services[0].id}
                                    className="box"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                        }
                                    }}
                                >
                                    {services[2]}
                                </motion.div>
                            </AnimatePresence>
                        }

                        {userExperience && 
                            // <div className={`flex flex-col-reverse sm:flex-row justify-around items-center sm:min-h-[30em]  transition-opacity ease-in-out delay-150 duration-700 visible ${deviceProgramming ? 'active' : '' }`}>
                            //     <div className="px-8 pb-5 space-y-3 text-left sm:pl-10 sm:w-1/2">
                            //         <div>
                            //             <p className="block text-sm text-yellow-900 uppercase">USABILITY</p>
                            //             <h1 className="block text-4xl font-extrabold">User Experience</h1>
                            //         </div>
                            //         <p className="block">
                            //             We employ some philosophy while building our layouts and interfaces to guarantee the best user experience.All our user interfaces and app layouts are built and designed from scratch to ensure originality and contemporary global standards of user interfaces.
                            //         </p>
                            //         <div className="pt-5">
                            //             <a className="bg-[#2b2b2b] hover:text-white [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-white px-6 py-2 text-xs">Read more</a>
                            //         </div>
                            //     </div>
                            //     <div className="pb-8 text-center sm:w-1/2">
                            //         <img src={'user experience.png'} alt="" />
                            //     </div>
                            // </div>
                            <AnimatePresence>
                                <motion.div 
                                    key={services[0].id}
                                    className="box"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                        }
                                    }}
                                >
                                    {services[3]}
                                </motion.div>
                            </AnimatePresence>
                        }

                    </div>  

                </div>   
            </section>
        );
    }
 
export default Services;