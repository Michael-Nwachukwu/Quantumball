const Quantum = () => {
    return ( 
        <section className="bg-stone-300">

            <div className="grid grid-cols-1 sm:grid-cols-2">
                
                <div>
                    <img src={'quantumball churchgate.jpg'} className="w-full h-full" alt="" />
                </div>

                <div className="p-7 lg:text-right lg:p-14 space-y-6 my-auto">

                    <h1 className="text-5xl font-extrabold text-[#2b2b2b]">
                        Get Started !
                    </h1>

                    <p className="block font-light text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos ipsum, ipsam quasi reiciendis aut dignissimos illum, minus nesciunt deleniti, sequi magni id perspiciatis inventore corrupti enim. Asperiores, voluptate amet?</p>


                    <p className="block font-light text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos ipsum, ipsam quasi reiciendis aut dignissimos illum, minus nesciunt deleniti, sequi magni id perspiciatis inventore corrupti enim. Asperiores, voluptate amet?</p>

                    <button className='bg-[#2b2b2b] h-12 hover:bg-transparent  border text-white hover:border-[#4a4a4a] hover:text-black'>
                        <span className='px-14 '> Get started </span>
                    </button>

                </div>

            </div>

        </section>
    );
}
 
export default Quantum;