
import React, { useEffect, useState } from 'react'
import "./border.css";
function CourseComponent3() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Adjust the delay time as needed
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="component3 rounded-2xl w-72 ">
      <div className="content ">
            <div className={`course-component  rounded-lg shadow-lg p-12 flex flex-col justify-center items-center ${isVisible ? 'animate-fadeInFromTop' : ''}`}>
      <div className="mb-8">
              <div className="relative rounded-full">
                <div className="radial-progress bg-accent text-lg text-accent-content text-blue-500 rounded-full px-10 py-10  " style={{ size: 7, value: 70 }}>80%</div>
                <div className="absolute inset-0 rounded-full border-gradient "></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl text-slate-500 font-bold mb-2">Pythan</p>
              <p className="text-base text-gray-400 font-normal">________________________________________</p>

              <button
                  type="submit" className="flex mt-4 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  transition duration-150 ease-in mb-2 mx-16 rounded-full py-2 px-5 bg-gradient-to-r ">
                  <span className="mr-2 ">Learn More</span>
                    
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  )
}


export default CourseComponent3
