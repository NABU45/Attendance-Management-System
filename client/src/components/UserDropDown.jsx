import React, { useEffect, useRef, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
function UserDropDown() {



  return (
    <div>
      <div className="absolute right-0 z-10 w-96 mt-2 overflow-hidden bg-white rounded-md shadow-xl flex flex-col justify-center items-center " >
        <div className='flex flex-row  bg-slate-1s00 w-full p-5 gap-3'>
        <img
                        className="object-cover w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                        alt="Your avatar"
           />
          <p className='text-bold mx-2 text-xl font-semibold flex juttify-center'>xattrinabin122@gmail.com</p>
          <RxCross1 className='mt-2' />
        </div>
        <div className='py-6  '>
          <img
                        className="object-cover w-32 h-32 rounded-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                        alt="Your avatar"
           />
           </div>
           <div>
          <p className='text-bold mx-2 text-2xl font-semibold flex juttify-center'>Nabin !!</p>
        </div>

        {/* Dropdown content */}
        <div className='border  w-72 flex flex-col  justify-start items-center rounded-2xl mt-1 mb-1 py-5 bg-slate-100'>
        <a href="/login" className="w-full px-6 py-2 text-sm text-gray-700  hover:text-slate-400 flex gap-4 justify-first">
          <div><IoSettingsOutline   className='mt-1'/>
          </div>Setting
          </a>
        <hr className='w-full' />
        <a href="/login" className="w-full px-6 py-2 text-sm text-gray-700  hover:text-slate-400 flex gap-4 justify-first">
          <div>< IoMdAdd  className='mt-1'/>
          </div>Add another account
          </a>
        <hr className='w-full' />
        <a href="/login" className="w-full px-6  py-2 text-sm text-gray-700  hover:text-slate-400 flex gap-4 justify-first">
          <div><RiLogoutBoxRLine  className='mt-1'/>
          </div>Sign out
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserDropDown
