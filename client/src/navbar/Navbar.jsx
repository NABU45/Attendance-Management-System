// import React from 'react';
// import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
// import UserDropDown from '../components/UserDropDown';

// const Navbar = ({ sidebarToogle, setSidebarToogle }) => {
//     return (
//         <nav className=' bg-gray-800 px-4 py-3 flex justify-between'>

//             <div className='flex items-center text-xl '>
//                 <FaBars className='text-white me-4 cursor-pointer sm:block hidden' onClick={() => setSidebarToogle(!sidebarToogle)} />
//                 <span className='text-white font-semibold mr-4 pr-10 sm:block hidden'>Menu</span>

//                 <div className='relative w-100%'>
//                 <FaBars className='text-[#FFFFF7] me-4 cursor-pointer absolute left-2 top-2  sm:hidden block' onClick={() => setSidebarToogle(!sidebarToogle)} />
//                     <input type="text" className='w-full px-4 py-1 pl-8 rounded-[15px]  shadow outline-none md:block sm:bg-white bg-[#454545]' placeholder="Search" />
//                     <button className='p-1 pt-2 focus:outline-none text-white hidden sm:block   sm:text-black absolute left-0 top-0'>
//                         <FaSearch />
//                     </button>
//                     <button className='text-white group absolute top-1 right-2'>
//                         <FaUserCircle className='w-6 h-6 mt-1' />
//                         <UserDropDown />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex items-center gap-x-5 '>
//                 <div className='text-white sm:block hidden'><FaBell className='w-6 h-6 cursor-pointer' /></div>

//                 <div className='relative sm:block hidden'>
//                     <button className='text-white group'>
//                         <FaUserCircle className='w-6 h-6 mt-1' />
//                         <UserDropDown />
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
