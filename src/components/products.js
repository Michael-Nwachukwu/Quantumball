import { useState } from "react";
import { motion, AnimatePresence, Variants, useInView } from "framer-motion";
import ProductCard from "./elements/ProductCard";
import ProductKey from "./elements/ProductKey";
import { useRef } from "react";



const Products = () => {

    const products = ProductCard();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        enter: () => {
          return {
            // x: direction > 0 ? 400 : 400,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: () => {
          return {
            zIndex: 0,
            // x: direction < 0 ? 400 : -400,
            opacity: 0
          };
        }
    };

    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
      

    const [organograd, setorganograd] = useState(true);
    const [legara, setlegara] = useState(false);

    const [moreProducts, setmoreProducts] = useState(null);


    const orgFacebook = `https://www.facebook.com/organograd`;
    const orgWhatsapp = `https://wa.me/2348030938271?text=Hello%20there!`;
    const orgLinkedin = `https://www.linkedin.com/showcase/organograd/`;
    const orgInstagram = "https://www.instagram.com/organograd";

    const orgSite = "https://organograd.com"
    const legSite = "https://legara.netlify.app"

    const toggleOrganograd = () => {

        if(!organograd) {
            setlegara(false)
            setorganograd(true);
        }

    }

    const toggleMoreProducts = () => {
        // console.log('clicked');

        if(!moreProducts) {
           setmoreProducts(true);
        }else{
            setmoreProducts(null);
        }

    }

    const toggleLegara = () => {

        if(!legara) {
            setorganograd(false);
            setlegara(true);
        }

    }

    return (
        <section className="bg-black py-10">
            
            <div className="text-center font-bold text-white text-3xl lg:text-3xl pt-6 px-10">
                <span className="text-sm lg:text-base font-light text-slate-300">OUR PRODUCTS</span> <br />
                Products We Are Proud to Share
            </div>
            
            <div className="flex md:flex-col lg:flex-row justify-around gap-3 mx-6">
                <div className="lg:p-8 text-center sm:basis-1/2">

                    <p className="px-2 py-10 lg:px-5 pb-10 text-slate-200 text-sm">
                        Quantumball offers a wide range of products, including industry-leading services like Organograd for work automation and Legara for payment gateway. Our products are highly professional, protected, and well-made, built by savvy developers and top professionals in the field. Trust us for a seamless experience.
                    </p>
                   
                    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-2">

                        <a 
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                            }}
                            onClick={toggleOrganograd}>
                            
                            <ProductKey 
                                isActive={organograd}
                                img='organograd.png'
                                heading='Organograd work Automation'
                                body='Organograd is a powerful suite of applications that includes payroll systems, office manager, asset management, invoicing systems, and much more. Our software is designed to help you streamline your workflow, increase productivity, and save time.'
                                instagram={orgInstagram} 
                                whatsapp={orgWhatsapp} 
                                facebook={orgFacebook} 
                                linkedin={orgLinkedin}
                                Site={orgSite}
                            />
                        </a>
                        
                        <a 
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                            }}
                            onClick={toggleLegara}>
                            
                            <ProductKey 
                                isActive={legara}
                                img={legara ? 'legara.png' : 'Legara White.png'}
                                heading='Legara Payment Solution'
                                body='Unlock seamless transactions with our gateway today. Legara offers a seamless payment experience for users, it integrates with various payment methods, including credit cards and digital wallets, we have user-friendly interface that makes it usable.'
                                instagram={orgInstagram} 
                                whatsapp={orgWhatsapp} 
                                facebook={orgFacebook} 
                                linkedin={orgLinkedin}
                                Site={orgSite}

                            />
                        </a>

                    </div>
                    
                    {moreProducts && 
                        <AnimatePresence>
                           
                            <motion.ul 
                                initial="hidden"
                                animate="visible"
                                variants={list}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
                            >

                                <motion.li
                                variants={item} 
                                className="text-left text-black space-y-2 backdrop-blur-xl border border-gray-300 bg-white/60 rounded-3xl p-4">
                                        <p className="font-bold text-md"> CBT platform </p>
                                        <p className="block text-xs font-light">
                                            Computer Based Tests System for all categories of schools with integration support.
                                        </p>
                                        <div className="text-right">
                                            <a href="" className="shadow-xl text-white bg-black rounded-md text-xs py-2 px-4 hover:bg-zinc-300 hover:text-black ">Book a demo</a>
                                        </div>
                                </motion.li>


                                <motion.li
                                variants={item} 
                                className="text-left text-black space-y-2 backdrop-blur-xl border border-gray-300 bg-white/60 rounded-3xl p-4">
                                        <p className="font-bold text-md"> e-IGR </p>
                                        <p className="block text-xs font-light">
                                            Electronic Internally generated Revenue system for states government revenue collections.
                                        </p>
                                        <div className="text-right">
                                            <a href="" className="shadow-xl text-white bg-black rounded-md text-xs py-2 px-4 hover:bg-zinc-300 hover:text-black ">Book a demo</a>
                                        </div>
                                </motion.li>

                                <motion.li
                                variants={item} 
                                className="text-left text-black space-y-2 backdrop-blur-xl border border-gray-300 bg-white/60 rounded-3xl p-4">
                                        <p className="font-bold text-md"> eRecruit </p>
                                        <p className="block text-xs font-light">
                                            Platform/System for recruiting companies for managing job applications and recruitments
                                        </p>
                                        <div className="text-right">
                                            <a href="" className="shadow-xl text-white bg-black rounded-md text-xs py-2 px-4 hover:bg-zinc-300 hover:text-black ">Book a demo</a>
                                        </div>
                                </motion.li>

                                <motion.li
                                variants={item} 
                                className="text-left text-black space-y-2 backdrop-blur-xl border border-gray-300 bg-white/60 rounded-3xl p-4">
                                        <p className="font-bold text-md"> eProcure </p>
                                        <p className="block text-xs font-light">
                                            Electronic Procurement System for organizations, government and parasatals that need it.
                                        </p>
                                        <div className="text-right">
                                            <a href="" className="shadow-xl text-white bg-black rounded-md text-xs py-2 px-4 hover:bg-zinc-300 hover:text-black ">Book a demo</a>
                                        </div>
                                </motion.li>

                            </motion.ul>
                            
                        </AnimatePresence>
                    }

                    <div className="mt-10">
                        <button onClick={()=>toggleMoreProducts()} className="w-1/2 py-3 heads [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.9))] text-black font-bold rounded-3xl">View <span>{moreProducts ? 'less' : 'All'}</span> </button>
                    </div>
                </div>

                <div className="text-white basis-1/2 hidden lg:block">
                    {organograd && 
                        // <div>
                        //     <div className="flex justify-center">
                        //         <img src={'landing-image.png'} className="w-1/2" alt="" />
                        //     </div>
                        //     <div className="px-6 space-y-3 text-slate-300">
                        //         <p className="text-sm">
                        //             Whether you're a small business owner or an enterprise-level corporation, Organograd can help optimize your workflow and take your business to the next level. Visit our website to learn more about Organograd and see how we can help you automate your tasks, save time, and improve your workflow.
                        //             Here are some of the features of organograd:
                        //         </p>
                        //         <ul className="pl-4 text-sm font-light list-disc">
                        //             <li>Asset Manager</li>
                        //             <li>Office Manager</li>
                        //             <li>Invoicing System</li>
                        //             <li>Requisition System</li>
                        //             <li>Sales Manager</li>
                        //             <li>Payroll System</li>
                        //         </ul>

                        //         <div className="flex items-center justify-between">
                                    
                        //             <Socials instagram={orgInstagram} whatsapp={orgWhatsapp} facebook={orgFacebook} linkedin={orgLinkedin} />
                                    
                        //             <Sitebtn Site={orgSite} />

                        //         </div>

                        //     </div>
                        // </div>

                        <AnimatePresence>
                            <motion.div 
                                key={products[0].id}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                x: { type: "spring", stiffness: 600, damping: 90 },
                                opacity: { duration: 2 }
                                }}
                            >
                                {products[0]}
                            </motion.div>
                        </AnimatePresence>
                        

                    }

                    {legara && 
                        // <div>
                        //     <div className="flex justify-center">
                        //         <img src={'9319767_4113361-removebg-preview.png'} className="w-1/2" alt="" />
                        //     </div>
                        //     <div className="px-6 space-y-3 text-slate-300">
                        //         <p className="text-sm">
                        //             Legara offers freelancers, small businesses and developers an easy-to-use payment gateway that can help them streamline payment processing, save time, and improve efficiency. Legara offers advanced security features that can help protect small businesses from fraud and other risks. This can give businesses and their customers peace of mind when making and accepting payments online.
                        //         </p>
                        //         <ul className="pl-4 text-sm font-light list-disc">
                        //             <li>Initiate</li>
                        //             <li>Process</li>
                        //             <li>Settle</li>
                        //             <li>Freelancers</li>
                        //             <li>Small Businesses</li>
                        //             <li>Developers</li>
                        //         </ul>

                        //         <div className="flex items-center justify-between">
                        //             {/* social buttons component */}
                        //             <Socials />

                        //             {/* visit site btn */}
                        //             <Sitebtn Site={legSite}/>
                        //         </div>

                        //     </div>
                        // </div>
                        <AnimatePresence>
                            <motion.div 
                                key={products[0].id}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                x: { type: "spring", stiffness: 600, damping: 90 },
                                opacity: { duration: 2 }
                                }}
                            >
                                {products[1]}
                            </motion.div>
                        </AnimatePresence>
                    }
                    
                </div>
            </div>

        </section>
    );
}

export default Products;