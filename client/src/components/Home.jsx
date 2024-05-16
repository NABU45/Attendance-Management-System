import React, { useState } from 'react';
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import TopHeader from './TopHeader';
import StudentRegister from '../pages/StudentRegister';
import HeroSection from './HeroSection';
import TeacherRegister from '../pages/TeacherRegister';
import Course from '../pages/Course';
import ContactUs from '../pages/Contactus';
import { SiTicktick } from "react-icons/si";



// import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [teacherRegister, setTeacherRegister] = useState(false);
    const [studentRegister, setStudentRegister] = useState(false);
    const [topHeaderVisible, setTopHeaderVisible] = useState(false);
    const [heroSectionVisible, setHeroSectionVisible] = useState(false);
    const [courseVisible, setCourseVisible] = useState(false);
    const [contactUsVisible, setContactUSVisible] = useState(false)

    const closeModals = () => {
        setTeacherRegister(false);
        setStudentRegister(false);
        setTopHeaderVisible(false);
        setHeroSectionVisible(false);
        setCourseVisible(false);
        setContactUSVisible(false);
    };

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      setIsDark(!isDark);
    };
    return (
        <>

  
           <div className="flex h-screen bg-gray-500">

                {/* Overlay */}
                <div
                    className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                    onClick={() => setSidebarOpen(false)}
                ></div>

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
                    <a className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25" href="/home">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>

                        <span className="mx-3">Dashboard</span>

                    </a>

                    <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="#">
                        <SiTicktick  className='w-6 h-6' />
                        <span onClick={() => {

                        }} className="mx-3">Attendance</span>
                    </a>

                    <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="#">
                        <PiStudent className='w-6 h-6' />
                        <span onClick={() => {

                            setStudentRegister(true);
                        }} className="mx-3">Student</span>
                    </a>


                    {/* Teacher button */}
                    <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="#">
                        <GiTeacher className='w-6 h-6' />
                        <span onClick={() => {
                            setTeacherRegister(true);
                        
                        }} className="mx-3">Teacher</span>
                    </a>
                    <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="#">
                       
                      <MdOutlineLibraryBooks  className='w-6 h-6' />
                        <span onClick={() => {
                            setCourseVisible(true)
                        }} className="mx-3">Course</span>
                    </a>

                    <a className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#">
                        <FcBusinessContact className=' w-6 h-6' />
                        <span onClick={() => setContactUSVisible(true)} class="mx-3">Contact us</span>
                    </a>
                </nav>

            </div>

            {/* top header section */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <h1>
                        <HeroSection />
                    </h1>
                </main>

            </div>
            {/* teaxher register */ }
    {
        teacherRegister && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${teacherRegister ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <TeacherRegister />
                    </div>
                </div>
            </div>

        )
    }

    {/* contat fo this orgainigation */ }
    {
        contactUsVisible && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${contactUsVisible ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <ContactUs />
                    </div>
                </div>
            </div>

        )
    }

    {/* courses */ }
    { courseVisible && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${courseVisible ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <Course />
                    </div>
                </div>
            </div>
    )}

    {/* StudentRegister */ }
    {
        studentRegister && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${studentRegister ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-100  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <StudentRegister
                        /> 
                    </div>
                </div>
            </div>
        )
    }

         </div>  

        </>

    );
}

export default Sidebar