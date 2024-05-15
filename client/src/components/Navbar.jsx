import React, { useState } from 'react';
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdDashboard, MdMenuBook } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import TopHeader from './TopHeader';
import StudentRegister from '../pages/StudentRegister';
import HeroSection from './HeroSection';
import TeacherRegister from '../pages/TeacherRegister';
import Course from '../pages/Course';
import ContactUs from '../pages/Contactus';
import Alpine from 'alpinejs';
function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [teacherRegister, setTeacherRegister] = useState(false);
    const [studentRegister, setStudentRegister] = useState(false);
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

  return (
    <div>
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
                        <PiStudent className='w-6 h-6' />
                        <span onClick={() => {

                            setStudentRegister(true);
                            setContactUSVisible(false);
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
                        <GiTeacher className='w-6 h-6' />
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
                
               
            {/* teaxher register */ }
           { teacherRegister && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${teacherRegister ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <TeacherRegister />
                    </div>
                </div>
            </div> )}

    {/* contat fo this orgainigation */ }
    {  contactUsVisible && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${contactUsVisible ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <ContactUs />
                    </div>
                </div>
            </div>
        )}

    {/* courses */ }
    {  courseVisible && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${courseVisible ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-200  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <Course />
                    </div>
                </div>
            </div>
        )}

    {/* StudentRegister */ }
    { studentRegister && (
            <div className="h-full w-full fixed inset-0 flex justify-center items-center bg-gray-200">
                <div className={`h-screen inset-0 fixed flex justify-center transition-all ${studentRegister ? "visible" : "invisible"}`}>
                    <div onClick={(e) => e.stopPropagation()} className={`h-auto w-[100%]  bg-slate-100  rounded-lg shadow-lg ml-[15%] transition-all duration-100 `}>
                        <StudentRegister
                        />
                    </div>
                </div>
            </div>
        )}

    </div>
  )
}

export default Navbar
