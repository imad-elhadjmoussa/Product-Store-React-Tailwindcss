
import React from 'react'

export const Navbar = ({handelInput}) => {
    return (
        <div className='fixed right-0 left-0 ml-48 p-5  z-50 bg-gray-300 shadow-lg'>
            <input onChange={(e)=>{handelInput(e.target.value)}} className='px-4 py-1 rounded-lg outline-none ' type="text" placeholder='Enter Product Name ...' />
        </div>
    )
}
