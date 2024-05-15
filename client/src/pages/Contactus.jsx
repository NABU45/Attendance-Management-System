import React, { useState } from "react";
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import TopHeader from "../components/TopHeader";


const ContactUs = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [error, setError] = useState(''); // Define error state

  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserEmail = (e) => setUserEmail(e.target.value);
  const handleUserMessage = (e) => setUserMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName: userName,
      userEmail: userEmail,
      userMessage: userMessage
    };
    console.log(userData);
    try {
      const response = await fetch('http://localhost:8004/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("Nice to meet you ");
        // Clear form fields on successful submission
        setUserName('');
        setUserEmail('');
        setUserMessage('');
        setError('');
      } else {
        console.log("Enter valid username and email");
        setError('Failed to submit form'); // Set error state
      }
    }
    catch (error) {
      console.error("Error:", error);
      setError('Failed to connect to the server'); // Set error state
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/login';
  };

  const handleGithub = () => {
    window.location.href = 'https://github.com/NABU45';
  };

  const handleTwitterLogin = () => {
    window.location.href = 'https://twitter.com/login';
  };


  return (
    
    <div className="flex flex-col flex-1 overflow-hidden">
    <TopHeader />
      <div className="w-[100%]   rounded-lg  px-10 flex flex-col ml-auto mt-0 relative z-10">
        <button
          onClick={handleGoogleLogin}
          aria-label="Continue with google" role="button" className="focus:ring-2 focus:ring-offset-1  py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4  focus:border-indigo-500">
          <FaGoogle />
          <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
        </button>
        <button
          onClick={handleGithub}
          aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
          <FaGithub />
          <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
        </button>
        <button
          onClick={handleTwitterLogin}
          aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-2 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
          <FaTwitter />
          <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
        </button>
        <div className="w-full flex items-center justify-between py-2">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  " />
                        </div>

        <div className="flex flex-col relative justify-center mb-4 ">
          <input
            onChange={handleUserName}
            value={userName}
            type="text"
            id="name"
            name="username"
            placeholder=" "
            className="w-full h-10 bg-white rounded 
              border border-gray-300
               focus:border-indigo-500 focus:ring-2
                focus:ring-indigo-200 text-base 
                outline-none text-gray-700 py-1 px-3 
                leading-8 transition-colors
                 duration-200 ease-in-out
                 peer "
          >
          </input>
          <span className="
              absolute left-3
              text-gray-500
              transition-all
              flex
              bg-white
              peer-focus:-translate-y-5
              peer-placeholder-shown:translate-y-0
              -translate-y-5
              pointer-events-none
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-md">Username</span>

        </div>

        <div className=" flex flex-col relative justify-center mb-5">
          <input
            onChange={handleUserEmail}
            value={userEmail}
            type="email"
            id="email"
            name="email"
            placeholder=" "
            className="w-full h-10 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
              peer "
          >
          </input>
          <span className="
              absolute left-3
              text-gray-500
              transition duration-100
              flex
              bg-white
               peer-focus:-translate-y-5
                peer-placeholder-shown:translate-y-0
               -translate-y-5
               pointer-events-none
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:text-xs
               text-md
              ">Email address</span>
        </div>
        <div className="flex felx-col relative justify-center mb-4">
          <input
            onChange={handleUserMessage}
            value={userMessage}
            id="message"
            name="message"
            className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out
               peer "
            placeholder=" "
          ></input>
          <span className="
             absolute left-3
             text-gray-500
             transition duration-100
             flex
             bg-white
              peer-focus:-translate-y-1
               peer-placeholder-shown:translate-y-0
              -translate-y-1
              pointer-events-none
              peer-focus:text-xs
              peer-[:not(:placeholder-shown)]:text-xs
              text-2xl
              ">Message here</span>

        </div>
        <button
          onClick={handleSubmit}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
export default ContactUs;
