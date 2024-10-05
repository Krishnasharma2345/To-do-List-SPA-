import React from 'react'

const Navbar = () => {
  return (
      <div className='flex justify-between m-3  '>
        <h1>Krishna</h1>
        <div>
             <ul className='flex gap-10 mx-6' >
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='border-4 px-4 font-bold rounded-lg border-black hover:border-white hover:bg-black hover:text-white transition-colors hover:cursor-pointer'>Menu</li>
                <li className='bg-green-400 px-4 pt-2 pb-1  font-semibold rounded-lg hover:scale-125 transition-all hover:cursor-pointer'>About us</li>
             </ul>
        </div>
      </div>
  )
}

export default Navbar
