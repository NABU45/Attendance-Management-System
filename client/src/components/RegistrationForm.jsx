import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import RegisterPic from "../images/queue-animate.svg"



function RegistrationForm() {
  const [firstname, setFirstname] = useState(" ");
  const [lastname, setLastname] = useState(" ");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState(" ");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelFirstNameChange = ((e) => setFirstname(e.target.value));
  const handellastNameChange = ((e) => setLastname(e.target.value));
  const handelEmailChange = ((e) => setEmail(e.target.value));
  const handelPasswordChange = ((e) => setPassword(e.target.value));
  const handelConfirmPasswordChange = ((e) => setConfirmpassword(e.target.value));


  const handleSubmit = async (e) => {

    if (password !== confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }
    e.preventDefault();

    setLoading(true);

    const payload = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    };

    // Example: Make API request to register user
    // Replace this with your actual API request
    try {
      const response = await fetch('http://localhost:9001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        setLoading(false);
        return;
      }

      toast.success('Registered successfully. Redirecting to login page...');
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred!');
      setLoading(false);
    }
  };


  return (

    <div className="w-screen min-h-screen animate-float flex flex-row-reverse  bg-gray-400  overflow-hidden">
      <div>
           <img  className='hidden md:block w-48 h-auto lg:block lg:w-[600px] lg:h-[600px] sm:invisible md:visible mt-20' src={RegisterPic} alt="" />
       </div>
      <div className=''>

        {/* <!-- component --> */}
        <div className="grid min-h-screen md:place-items-first">
          <div className=" p-10 bg-white  mt-10
          md:ml-28 sm:w-full sm:h-[550px] md:h-[580px]  md:w-[90%] ">
            <h1 className="text-xl font-semibold">Hello there ? <span className="font-normal">please fill in your information to continue</span></h1>
            <form className="mt-6" method='POST'>
              <div className="flex justify-between gap-3">

                <span className="w-1/2">
                  <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                  <input onChange={handelFirstNameChange} value={firstname}
                    id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"  required />
                </span>

                <span className="w-1/2">
                  <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                  <input onChange={handellastNameChange} value={lastname}
                    id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md" required />
                </span>

              </div>
              <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
              <input onChange={handelEmailChange} value={email}
                id="email" type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md" required />

              <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input onChange={handelPasswordChange} value={password}
                id="password" type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md" required />

              <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
              <input onChange={handelConfirmPasswordChange} value={confirmpassword}
                id="password-confirm" type="password" name="password-confirm" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md" required />
<br />
              <button onClick={handleSubmit}
                type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700  py-2 w-full transition duration-150 ease-in rounded-md">
                Sign up
              </button>
              <Link to="/login">
                <p className=" py-3 inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">Already have been registered?</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
