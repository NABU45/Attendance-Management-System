import React, { useState } from 'react'
import { FaBars, FaBell, FaCog, FaHome, FaSearch, FaUserCircle } from 'react-icons/fa'
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import TopHeader from './TopHeader';



const Sidebar = () => {


    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [notificationOpen, setNotificationOpen] = useState(false);



    return (
        <>
            <div>
                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

                <div x-data="{ sidebarOpen: false }" className="flex h-screen bg-gray-200">
                    <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => { document.querySelector('[x-data]').__x.$data.sidebarOpen = false; }}></div>


                    {/* navbarsection */}
                    <div className={`transform ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 bg-gray-900 lg:translate-x-0 lg:static lg:inset-0`}>

                        <div className="flex items-center justify-center mt-8">
                            <div className="flex items-center">
                                <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                                </svg>
                                <span className="mx-2 text-2xl font-semibold text-white">Attendance</span>
                            </div>
                        </div>

                        <nav className="mt-10">
                            <a className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                </svg>
                                <span className="mx-3">Dashboard</span>
                            </a>


                            <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                href="#">
                                <PiStudent className=' w-6 h-6' />
                                <span class="mx-3">Student</span>
                            </a>
                            <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                href="#">
                                <GiTeacher className=' w-6 h-6' />
                                <span class="mx-3">Teacher</span>
                            </a>

                            <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                href="#">
                                <MdMenuBook className=' w-6 h-6' />
                                <span class="mx-3">Course</span>
                            </a>

                            <a class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                                href="#">
                                <FcBusinessContact className=' w-6 h-6' />
                                <span class="mx-3">Contact us</span>
                            </a>
                        </nav>
                    </div>

             {/* top header section */}

                    <div className="flex flex-col flex-1 overflow-hidden">
                        <TopHeader/>

                        {/* <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div className="container px-6 py-8 mx-auto">
                                <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

                                <div className="mt-4">
                                    <div className="flex flex-wrap -mx-6">
                                        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                                            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                                <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                                                    <svg className="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </div>

                                                <div className="mx-5">
                                                    <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
                                                    <div className="text-gray-500">New Users</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                                <div className="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                                                    <svg className="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                                                            fill="currentColor"></path>
                                                    </svg>
                                                </div>

                                                <div className="mx-5">
                                                    <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
                                                    <div className="text-gray-500">Total Orders</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                            <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                                                <div className="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                                                    <svg className="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                                                            stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                                                        <path
                                                            d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                                                            stroke="currentColor" stroke-width="2"></path>
                                                    </svg>
                                                </div>

                                                <div className="mx-5">
                                                    <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
                                                    <div className="text-gray-500">Available Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">

                                </div>

                                <div className="flex flex-col mt-8">
                                    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                        <div
                                            className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                            <table className="min-w-full">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Name</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Title</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Status</th>
                                                        <th
                                                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                            Role</th>
                                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white">
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 w-10 h-10">
                                                                    <img className="w-10 h-10 rounded-full"
                                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                                                        alt="" />
                                                                </div>

                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium leading-5 text-gray-900">John Doe
                                                                    </div>
                                                                    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                                                        </td>

                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <span
                                                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                                                        </td>

                                                        <td
                                                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            Owner</td>

                                                        <td
                                                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main> */}
                    </div >
                </div >
            </div >
        </>

    );
}

export default Sidebar