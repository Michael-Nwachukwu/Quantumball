import { motion } from "framer-motion";
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='h-auto bg-cover z-0 bg-[center_top] bg-no-repeat heads bg-[#e1e1e1] pb-16 lg:pb-3'>
      <Navbar />

      <div className='flex flex-col items-center justify-between sm:flex-row lg:px-10'>

        <motion.div 
          initial={{ x: -500, opacity: 0, zIndex: 0 }}
          animate={{ x: 0, opacity: 1, zIndex: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          
          className='w-full lg:w-[50%] px-4 mt-8 lg:p-16 sm:ml-3 lg:ml-2'>

          <div className='mb-5 text-center sm:text-left w-full md:w-[80%] lg:w-full'>
            <p className='mb-1 text-xs text-yellow-900 uppercase sm:text-sm '>
              Cloud based solutions for your business
            </p>
            <div className='text-3xl sm:text-5xl text-[#404040] font-medium'>
              We make I.T simple, faster, and less expensive.
            </div>
          </div>
          {/* bg-[#2b2b2b] */}
          <div className=''>
            <h1 className='text-lg font-bold text-yellow-700'>
              Smart Apps 
              <span className='pl-1 text-xs font-light text-black'>
                with artificial intelligence
              </span>
            </h1>
            <div className='space-y-2 text-white'>
              <ul className='ml-5 text-sm font-light text-black list-disc sm:text-slate-700 sm:text-base'>
                <li className='hover:text-yellow-700'>
                  <a href='#'> </a>Startups
                </li>
                <li className='hover:text-yellow-700'>
                  <a href='#'> Third - Party Vendor Software </a>
                </li>
                <li className='hover:text-yellow-700'>
                  <a href='#'> Device Programming </a>
                </li>
                <li className='hover:text-yellow-700'>
                  <a href='#'> Payment Systems </a>
                </li>
                <li className='hover:text-yellow-700'>
                  <a href='#'> Consultancy </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col items-center mt-5 space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0'>
            <button className='bg-[#2b2b2b] h-12 w-full hover:bg-transparent  border text-white hover:border-[#4a4a4a] hover:text-black'>
              <span className='lg:px-14 '> Get started </span>
            </button>
            <button className='bg-transparent border border-[#4a4a4a] w-full text-black h-12 hover:bg-[#2b2b2b] hover:text-white hover:border-0'>
              <span className='lg:px-14 '>
                More info
                <span span className='inline-flex pl-3'>
                  &#8594;
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        <div className='hidden lg:block lg:w-[40%]'>
          <img
            src={'49D6E8D3-4EE3-4DA3-AE71-1FA7C9EC1EAC.gif'}
            className='w-10/12 mt-4'
            alt='QuantumBall'
          />
        </div>

      </div>

    </header>
  )
}

export default Header
