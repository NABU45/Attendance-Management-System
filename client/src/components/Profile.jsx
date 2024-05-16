import React from 'react'

function Profile() {
  return (
    <div className='w-1/3 flex justify-start border  h-auto'>
           <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                        alt="Your avatar"
           />
           <h3 className='mx-2 text-2xl font-semibold text-slate-800'>Nabin Japrel</h3>
      
    </div>
  )
}

export default Profile
