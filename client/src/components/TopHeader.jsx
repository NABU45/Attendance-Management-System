import React, { useEffect, useRef, useState } from 'react';
import UserDropDown from '../components/UserDropDown';

function TopHeader() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div>
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b-4">
                <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    <div className="relative mx-4 lg:mx-0">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </span>
                        <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="relative">
                        <button onClick={() => setNotificationOpen(!notificationOpen)} className="flex mx-4 text-gray-600 focus:outline-none">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </button>
                        {notificationOpen && (
                            <div onClick={() => setNotificationOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
                        )}
                        <div className="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80">
                            {/* Notification content */}
                        </div>
                    </div>

                    <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                    <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                        alt="Your avatar"
                    />
                </button>
                {dropdownOpen && (<UserDropDown/>)}
               
            </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
