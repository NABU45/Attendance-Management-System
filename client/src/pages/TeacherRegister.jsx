import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import TeacherDetails from '../components/TeacherDetails';

function TeacherRegister() {
    const [studentId, setStudentId] = useState(" ");
    const handleStudentIdChange = (e) => setStudentId(e.target.value);

    const [studentName, setStudentName] = useState("");
    const handleStudentNameChange = (e) => setStudentName(e.target.value);

    const [course, setCourse] = useState("");
    const handleCourseChange = (e) => setCourse(e.target.value);

    const [joinDate, setJoinDate] = useState("");
    const handleJoinDateChange = (e) => setJoinDate(e.target.value);

    const [status, setStatus] = useState("");
    const handleStatusChange = (e) => setStatus(e.target.value);

    const [addStudent, setAddStudent] = useState([]);
    const handleStudentInformationAdd = () => {
        const newStudent = {
            studentId,
            studentName,
            course,
            joinDate,
            status,
        };

        setAddStudent([...addStudent, newStudent]);
        setStudentId("");
        setStudentName("");
        setCourse("");
        setJoinDate("");
        setStatus("");
    };


    const handleStudentDelete =(studentinfo) => {
        const newStudentList = addStudent.filter(student => student.studentId !== studentinfo);
        setAddStudent(newStudentList);
    }

    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <TopHeader />

            <body className="antialiased font-sans bg-gray-200">
                <div className="w-[100%]  mx-auto bg-white rounded shadow">

                    <div className="mx-16 py-4 px-4 text-black text-2xl font-bold ">Teacher Registeration</div>

                    <form name="student_application" id="student_application" action="">
                        <div className="py-4 px-8 flex flex-row gap-5">
                            <div className="mb-4">
                                <input
                                    onChange={handleStudentIdChange}
                                    value={studentId}
                                    className="border rounded w-full py-2 px-3 text-grey-darker"
                                    type="number"
                                    name="student_id"
                                    id="student_id"
                                    placeholder="Enter Your ID"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    onChange={handleStudentNameChange}
                                    value={studentName}
                                    className="border rounded w-full py-2 px-3 text-grey-darker"
                                    type="text"
                                    name="student_name"
                                    id="student_name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    onChange={handleCourseChange}
                                    value={course}
                                    className="border rounded w-full py-2 px-3 text-grey-darker"
                                    type="text"
                                    name="course_name"
                                    id="course_name"
                                    placeholder="Enter Your Course Name"
                                />
                                <p id="error_creater_id"></p>
                            </div>
                            <div className="mb-4">
                                <input
                                    onChange={handleJoinDateChange}
                                    value={joinDate}
                                    className="border rounded w-full py-2 px-3 text-grey-darker"
                                    type="datetime-local"
                                    name="addmission_date"
                                    id="addmission_date"
                                />
                                <p id="error_intake_year"></p>
                            </div>
                            <div className='mb-4'>
                                
                              <div className="flex flex-row mb-1 sm:mb-0">
                              <div className="relative">
                                  <select  onChange={handleStatusChange} value={status}
                                      className="appearance-none h-full rounded-r  border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                                  >
                                      <option>Status</option>
                                      <option>Active</option>
                                      <option>Inactive</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                      </svg>
                                  </div>
                              </div>
                          </div>
                            </div>


                            <div className="mb-4">
                             
                                     <button
                onClick={handleStudentInformationAdd}
                  type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  transition duration-150 ease-in mb-2 mx-16 rounded-full py-2 px-5 bg-gradient-to-r ">
                  <span className="mr-2 uppercase">Add</span>
                    
                </button>
                            
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div className="my-2 flex sm:flex-row flex-col">
                            <div className="flex flex-row mb-1 sm:mb-0">
                                <div className="relative">
                                    <select
                                        className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                                    >
                                        <option>All</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="block relative">
                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                                    </svg>
                                </span>
                                <input
                                    placeholder="Search"
                                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className='border-gray-200  bg-white '> 
                            <div className='flex flex-row justify-between w-[68%] px-4 py-3  ' >
                            <p>Teacher Id</p>
                            <p className='-ml-4'>Teacher Name</p>
                            <p className='mr-14'>Courses</p>
                            <p className=' mr-12'>Join Date</p>
                            <p className='ml-4'>Status</p>
                        </div>
                        </div>

                        


                        {addStudent.map(student => (
                            <TeacherDetails
                                key={student.studentId}
                                studentId={student.studentId}
                                studentName={student.studentName}
                                course={student.course}
                                joinDate={student.joinDate}
                                status={student.status}
                                deleteHandler={handleStudentDelete}
                            />
                        ))}


                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">Prev</button>
                                <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default TeacherRegister;
