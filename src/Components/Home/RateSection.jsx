import { Rating } from '@mui/material';
import React from 'react'

export const RateSection = ({setRate,rate}) => {
    return (
        <div className=' flex items-center flex-col gap-3 w-full'>
            <h1 className='text-3xl font-bold text-gray-900 text-center '>
                Filter By Product Price
            </h1>
            <div className=' flex gap-5 items-center  '>
                <Rating
                    onChange={(e) => { setRate(e.target.value); }}
                    name="size-large" size="large" value={rate}
                />
                <button
                    className=' px-5 py-2 rounded-sm text-white font-semibold bg-primary-500 hover:bg-primary-400 hoverEffect '
                    onClick={() => { setRate(0) }}
                >
                    Reset Rate
                </button>
            </div>
        </div>
    )
}
