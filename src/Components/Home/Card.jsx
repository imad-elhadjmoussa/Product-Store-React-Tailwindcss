import { motion } from 'framer-motion'
import React from 'react'
import rateIcon from './icons/star-sharp-svgrepo-com.svg'
import viewIcon from './icons/view-svgrepo-com.svg'
import { Rating } from '@mui/material'

export const Card = ({ img, title, price, rate, view }) => {
    return (
        <motion.div
            className='flex flex-col h-full justify-between gap-2 items-start rounded-sm border-[0.5px] border-gray-200 shadow-lg cursor-pointer p-3'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: "some" }}
        >
            <div className=' flex items-center justify-center w-full '>
                <img className=' size-[180px] ' src={img} />
            </div>
            <h2 className=' text-lg font-semibold font-bebas-neue text-gray-900 w-full text-center  '>
                {title}
            </h2>

            <span className=' text-2xl font-bebas-neue font-bold text-primary-800 '>
                ${price}
            </span>

            <div className=' flex justify-between w-full items-center  '>
                <Rating
                    value={Math.round(rate)}
                    onChange={(e) => { }}

                    readOnly
                />
                <div className=' flex items-center gap-2 '>
                    <img className=' size-[25px] ' src={viewIcon} alt="Reviews" />
                    <span className=' font-bold text-primary-400 text-lg font-bebas-neue '>{view} </span>
                </div>
            </div>
        </motion.div>
    )
}
