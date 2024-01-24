

import React from 'react'

export const Card = ({img, title,star,newPrice,prevPrice}) => {
    return (
        <div className='border  flex flex-col items-center border-gray-200 rounded-xl shadow-md hover:shadow-lg transition list-outside duration-500 cursor-pointer p-2'>
            <div >
                <img className='w-48 h-48 object-contain' src={img}/>
            </div>
            <h2 className='font-bold text-gray-700 text-xl text-center my-2'> {title} </h2>
            <div>
                <p className='my-5 '> <span className='font-bold text-white bg-green-600 px-2 py-1 rounded-lg mr-2 '>{`$${newPrice}`}</span  > <span className='font-bold text-white bg-red-600 px-2 decoration-2 ml-2 py-1 line-through  rounded-lg' >{`${prevPrice}`}</span> </p>
            </div>
            <div className=' text-yellow-400 text-start py-2'>
                {star}
            </div>
        </div>
    )
}
