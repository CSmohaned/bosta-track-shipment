import {ChatBubbleLeftIcon} from "@heroicons/react/24/solid";
import {ChevronDownIcon,ChevronRightIcon,MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
const modal = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
      transition: {ease: 'easeInOut',duration: 2}
  }
}

function Navbar() {
  const navigate  = useNavigate();
  const [id,setId] = useState('');
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
  }, [navbar])
  
  return(
    <>
     <nav className={`${navbar?"w-screen h-screen flex flex-col justify-start items-start sticky top-0":"w-screen flex flex-row justify-start items-center h-[90px] sticky top-0"} bg-white z-30`}>
      <div className="ml-16 mr-10 md:ml-8">
      <svg width="1em" height="1em" viewBox="0 0 111 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="w-28 h-28"><path d="M32.6634 8.83273L17.7948 0.266462C17.2016 -0.0888208 16.4503 -0.0888208 15.8572 0.266462L0.9886 8.83273C0.39544 9.18801 0 9.81962 0 10.5302V23.0835C0 23.7941 0.355896 24.4257 0.9886 24.781L15.8572 33.3473C16.1735 33.5052 16.4899 33.6236 16.8458 33.6236C17.2016 33.6236 17.518 33.5447 17.8344 33.3473L32.7029 24.781C33.2961 24.4257 33.6915 23.7941 33.6915 23.0835V10.5302C33.6519 9.81962 33.2565 9.18801 32.6634 8.83273ZM30.2116 19.9649L24.715 16.8069L30.2116 13.6488V19.9649ZM16.8458 3.66139L28.7485 10.5302L16.8458 17.399L4.90345 10.5302L16.8458 3.66139ZM3.44032 13.6093L8.93695 16.7674L3.44032 19.9255V13.6093ZM16.8458 29.9129L4.90345 23.0441L12.3377 18.7412L15.8176 20.7545C16.134 20.9124 16.4503 21.0308 16.8062 21.0308C17.1621 21.0308 17.4785 20.9518 17.7948 20.7545L21.2747 18.7412L28.709 23.0441L16.8458 29.9129Z" fill="#E30613"></path><path d="M65.6826 11.7934C61.57 11.7934 58.7229 14.5962 58.7229 18.6228C58.7229 22.6493 61.57 25.4521 65.6431 25.4521C69.7556 25.4521 72.6028 22.6493 72.6028 18.6228C72.6028 14.5962 69.7556 11.7934 65.6826 11.7934ZM65.6826 22.3335C63.5472 22.3335 62.2027 20.8729 62.2027 18.6228C62.2027 16.3726 63.5868 14.912 65.6826 14.912C67.7389 14.912 69.1625 16.4121 69.1625 18.6228C69.1229 20.8334 67.7389 22.3335 65.6826 22.3335Z" fill="#E30613"></path><path d="M80.2743 17.2016C78.653 16.9648 77.2294 16.7674 77.2294 15.6621C77.2294 15.1094 77.6249 14.3988 79.4439 14.3988C80.907 14.3988 81.9747 15.0304 82.2911 16.1358L85.415 15.4252C84.7428 13.0567 82.6865 11.7539 79.6416 11.7539C76.2408 11.7539 73.9473 13.333 73.9473 15.7015C73.9473 19.0175 76.8735 19.4123 79.2462 19.7676C80.907 20.0044 82.3701 20.2018 82.3701 21.3861C82.3701 22.0177 81.8956 22.7677 79.6416 22.7677C77.9412 22.7677 76.7944 22.1361 76.4385 20.9913L73.3146 21.6229C74.0264 24.0704 76.1617 25.3731 79.5625 25.3731C83.3192 25.3731 85.6918 23.7941 85.6918 21.2676C85.7314 17.9911 82.7261 17.5569 80.2743 17.2016Z" fill="#E30613"></path><path d="M92.2562 22.4914C91.228 22.4914 90.6348 21.7808 90.6348 20.5571V15.0305H95.9338V12.1487H90.6348V8.12217H87.1945V20.5965C87.1945 23.7151 88.9344 25.4916 91.9398 25.4916C94.5497 25.4916 96.2501 24.3073 96.8433 22.0966L94.0752 21.2282C93.7588 22.0177 93.1261 22.4914 92.2562 22.4914Z" fill="#E30613"></path><path d="M107.639 13.8067L107.52 13.6488C106.65 12.425 105.227 11.7934 103.328 11.7934C99.8486 11.7934 97.3573 14.6752 97.3573 18.6227C97.3573 22.6098 99.8486 25.4916 103.249 25.4916C105.147 25.4916 106.571 24.8205 107.481 23.5178L107.599 23.3599V23.3993L108.271 25.1363H111V12.1882H108.271L107.639 13.8067ZM104.159 22.3335C102.142 22.3335 100.798 20.8729 100.798 18.5833C100.798 16.3332 102.103 14.8725 104.159 14.8725C106.215 14.8725 107.56 16.3332 107.56 18.5833C107.56 20.8334 106.176 22.3335 104.159 22.3335Z" fill="#E30613"></path><path d="M51.4863 11.7937C49.6673 11.7937 48.2832 12.4253 47.3737 13.649L47.176 13.9254V8.16189H43.7357V25.1365H46.4642L47.176 23.3206L47.2946 23.4785C48.2437 24.8207 49.6673 25.4918 51.5258 25.4918C55.0057 25.4918 57.4179 22.689 57.4179 18.6625C57.3783 14.5965 54.9662 11.7937 51.4863 11.7937ZM50.6163 22.3337C49.0346 22.3337 47.176 21.7021 47.176 18.5835C47.176 16.2939 48.5205 14.8333 50.6559 14.8333C52.6331 14.8333 53.938 16.3334 53.938 18.5835C53.8985 20.8337 52.5935 22.3337 50.6163 22.3337Z" fill="#E30613"></path></svg>
      </div>
      <ul className={`${navbar?"flex flex-col justify-between p-4 items-start":"flex items-center justify-center space-x-6 lg:hidden"}`}>
                       <li className='group py-2 px-2 relative flex flex-col justify-center items-center'>
                         <Link to ="/" className='group text-[#4f5665] hover:text-[#e30613]  justify-center items-center text-sm font-latoBold'>Products<ChevronRightIcon className="h-3 w-3 ml-1 hidden group-hover:inline"/><ChevronDownIcon className="h-3 w-3 ml-1 inline group-hover:hidden"/></Link>
                         <div className="z-10 hidden absolute top-8 left-auto group-hover:flex group-hover:flex-col group-hover:justify-start group-hover:items-center group-hover:shadow-lg group-hover:bg-white group-hover:p-2 group-hover:border-white group-hover:rounded-lg  ">
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">Solutions</Link>
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">Dashboard</Link>
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">MobileApp</Link>
                         </div>
                       </li>
                       {navbar && <div  className="border-dotted border-t border-[#4f5665] w-screen mb-4"></div>}
                       <li className='group py-2 px-2 relative flex flex-col justify-center items-center'>
                         <Link to ="/" className='group text-[#4f5665] hover:text-[#e30613] justify-center items-center text-sm font-latoBold'>Integrations<ChevronRightIcon className="h-3 w-3 ml-1 hidden group-hover:inline"/><ChevronDownIcon className="h-3 w-3 ml-1 inline group-hover:hidden"/></Link>
                         <div className="z-10 hidden absolute top-8 left-auto group-hover:flex group-hover:flex-col group-hover:justify-start group-hover:items-center group-hover:shadow-lg group-hover:bg-white group-hover:p-2 group-hover:border-white group-hover:rounded-lg  ">
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">Shopify</Link>
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">WooCommerce</Link>
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">Custom APIs</Link>
                         </div>                      
                       </li>
                       {navbar && <div  className="border-dotted border-t border-[#4f5665] w-screen mb-4"></div>}
                       <li className='group py-2 px-2 relative flex flex-col justify-center items-center'>
                         <Link to ="/" className='group text-[#4f5665] hover:text-[#e30613] justify-center items-center text-sm font-latoBold'>Use Cases<ChevronRightIcon className="h-3 w-3 ml-1 hidden group-hover:inline"/><ChevronDownIcon className="h-3 w-3 ml-1 inline group-hover:hidden"/></Link>
                         <div className="hidden absolute top-8 left-auto group-hover:flex group-hover:flex-col group-hover:justify-start group-hover:items-center group-hover:shadow-lg group-hover:bg-white group-hover:p-2 group-hover:border-white group-hover:rounded-lg  ">
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">Businesses</Link>
                          <Link to="/" className="p-2 hover:bg-gray-100 w-full text-xs">SMEs</Link>
                         </div>                      
                       </li>
                       {navbar && <div  className="border-dotted border-t border-[#4f5665] w-screen mb-4"></div>}
                       <li className='py-2 px-2'>
                         <Link to="/" className='text-[#4f5665] hover:text-[#e30613] text-sm font-latoBold'>Pricing</Link>
                       </li>
                       {navbar && <div  className="border-dotted border-t border-[#4f5665] w-screen mb-4"></div>}
                       <li className={`${navbar?"group fixed top-10 right-10":"group py-6 px-2 relative flex flex-col justify-center items-center  hover:rounded-t-lg hover:bg-white hover:shadow-2xl"}`}>
                         <Link to="/" className='group mx-5 text-[#4f5665] hover:text-[#e30613] justify-center items-center text-sm font-latoBold'>Track Shipment<ChevronRightIcon className="h-3 w-3 ml-1 hidden group-hover:inline"/><ChevronDownIcon className="h-3 w-3 ml-1 inline group-hover:hidden"/></Link>
                         <div className={`${navbar?"hidden absolute top-7 right-3":"hidden absolute top-[4.5rem] right-0"} group-hover:flex group-hover:flex-col group-hover:justify-start group-hover:items-start group-hover:shadow-lg group-hover:bg-white group-hover:p-10 group-hover:border-white group-hover:rounded-lg`}>
                          <h3 className="mb-3">Track your shipment</h3>
                          <div className="flex flex-row justify-start items-start">
                          <input type="search" placeholder="Tracking No." className="h-10 border-2 rounded-tl-lg rounded-bl-lg focus:border-emerald-100 p-2" value={id} onChange={(e)=> setId(e.target.value)}/>
                          <button className="p-2 bg-[#e30613] rounded-tr-lg rounded-br-lg" onClick={()=> navigate(`search/${id}`)}><MagnifyingGlassIcon className="w-6 h-6 text-center text-white"/></button>
                          </div>
                         </div>
                       </li>
                       <li className='group py-2 px-2 relative flex flex-col justify-center items-center'>
                         <Link to="/" className='group text-[#4f5665] hover:text-[#e30613] justify-center items-center text-sm font-latoBold'>En<ChevronRightIcon className="h-3 w-3 ml-1 hidden group-hover:inline"/><ChevronDownIcon className="h-3 w-3 ml-1 inline group-hover:hidden"/></Link>
                         <div className="hidden absolute top-8 left-auto group-hover:flex group-hover:flex-col group-hover:justify-start group-hover:items-center group-hover:shadow-lg group-hover:bg-white group-hover:p-1 group-hover:border-white group-hover:rounded-lg  ">
                          <Link to="/" className="p-1 hover:bg-gray-100 w-full text-xs">English</Link>
                          <Link to="/" className="p-1 hover:bg-gray-100 w-full text-xs">Arabic</Link>
                         </div>
                       </li>
                       {navbar && <div  className="border-dotted border-t border-[#4f5665] w-screen mb-4"></div>}
                       <li className={`${navbar ?"hidden":"py-2 px-2"}`}>
                         <Link to="/" className='text-[#4f5665] hover:text-[#e30613] text-sm font-latoBold hover:border-b-2 hover:border-b-[#e30613]'>Sign In</Link>
                       </li>
                       <li className={`${navbar ?"hidden":"py-2 px-2"}`}>
                         <Link to="/" className='text-[#e30613] hover:text-white hover:bg-[#e30613] text-sm font-latoBold border py-4 px-7 border-[#e30613] rounded-full'><span className="hover:border-b-white hover:border-b">Sign Up</span></Link>
                       </li>
                       {navbar && (
                        <div className="flex flex-col justify-center items-center">
                           <li className="py-2 px-10 mb-8">
                         <Link to="/" className='text-[#e30613] hover:text-white text-sm font-latoBold border py-4 px-40 border-black rounded-full'><span className="text-[#4f5665] hover:text-[#e30613] text-sm font-latoBold hover:border-b-2 hover:border-b-[#e30613]">Sign In</span></Link>
                       </li>
                           <li className="">
                         <Link to="/" className='text-[#e30613] hover:text-white hover:bg-[#e30613] text-sm font-latoBold border py-4 px-40 border-[#e30613] rounded-full'><span className="hover:border-b-white hover:border-b">Sign Up</span></Link>
                       </li>
                        </div>
                       )}
      </ul>
      <div className="lg:fixed lg:right-2 lg:top-6 lg:inline hidden z-10">
      <button
                        className="mt-2 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border z-30"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-[dodgerblue]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-[dodgerblue]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
    </nav>
    <motion.div variants={modal}  initial="hidden"
        animate="visible" className="fixed bottom-2 right-2 border rounded-b-3xl rounded-tl-3xl rounded-tr-sm py-3 px-3 bg-[#e30613] z-20">
    <ChatBubbleLeftIcon className="w-6 h-6 text-white"/>
    </motion.div>
    {/* {darkMode ? (<SunIcon className="fixed right-1 top-1/2 h-6 w-6 text-blue-500" onClick={()=> setDarkMode(false)}/>) : 
    (<MoonIcon className="fixed right-1 top-1/2 h-6 w-6 text-blue-500" onClick={()=> setDarkMode(true)}/>)} */}
    </>
    )
}
export default Navbar;