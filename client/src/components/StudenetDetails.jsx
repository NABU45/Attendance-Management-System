import React from 'react';

function StudenetDetails(props) {
    const handleDeleteButtonClick = () => {
        props.deleteHandler(props.studentId);
    }
    return (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto bg-gray-400">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                    <table className="min-w-full leading-normal">
                        <thead>
                            {/* <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Course</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Join Date</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            </tr> */}
                        </thead>
                        <tbody className=''>
                            <tr className='flex justify-between  border-gray-200  bg-gray-400 text-sm '>
                                <td className="px-4 py-8 ">
                                    <p className="text-gray-900 whitespace-no-wrap">{props.studentId}</p>
                                </td>
                                <td className="px-5 py-5 ">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img
                                                className="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">{props.studentName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-8 ">
                                    <p className="text-gray-900 whitespace-no-wrap">{props.course}</p>
                                </td>
                                <td className="px-5 py-8 ">
                                    <p className="text-gray-900 whitespace-no-wrap">{props.joinDate}</p>
                                </td>
                                <td className="px-5 py-7">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{props.status}</span>
                                    </span>
                                </td>



                                <td  className="px-5 py-5 ">
                                    <button
                                        onClick={handleDeleteButtonClick}
                                        type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  transition duration-150 ease-in mb-2 mx-16 rounded-full py-2 px-5 bg-gradient-to-r ">
                                        <span className="mr-2 uppercase">Delete</span>

                                    </button>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StudenetDetails;
