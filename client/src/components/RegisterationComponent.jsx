// import React, { useState } from 'react';
// import { RxCross1 } from "react-icons/rx";
// import RegistrationForm from './RegistrationForm';

// function RegisterationComponent() {
//     const [contact, setContact] = useState(false);

//     const closeModal = () => {
//         setContact(false);
//     };

//     return (
//         <div>
//             {contact && (
//                 <div
//                     className="h-screen inset-0 fixed flex justify-center items-center transition-all"
//                     onClick={closeModal}
//                 >
//                     <div
//                         className={`h-[85%] w-[50%] bg-slate-200 rounded-lg shadow-lg ml-[35%] transition-all duration-100 ${
//                             contact ? "scale-1 translate-y-10" : "scale-900 translate-x-500"
//                         } px-0 py-4`}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <div className="flex flex-row justify-between items-center px-8">
//                             <span className="font-bold text-xl">Contact with me</span>
//                             <RxCross1 size={20} color="gray" onClick={closeModal} />
//                         </div>
//                         <div className="my-5 w-full border-b-2 border-blue-600 rounded-full"></div>
//                         <RegistrationForm />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default RegisterationComponent;
