

import React from 'react'
//import data from '../Data/data'
import { Card } from './Card'


export const Main = ({ data, handelBtn }) => {


    return (
        <div className='ml-48  px-10 py-28 h-96 '>
            <h1 className='text-3xl mb-5 font-bold'>
                Recommended
            </h1>
            <div className='my-5'>
                <button onClick={(e) => { handelBtn(e.target.innerText) }} className='px-3 py-1 bg-red-300 mr-3 my-3 rounded-lg hover:bg-red-200 transition list-outside duration-500 cursor-pointer shadow-lg'>All Products</button>
                <button onClick={(e) => { handelBtn(e.target.innerText) }} className='px-3 py-1 bg-red-300 mr-3 my-3 rounded-lg hover:bg-red-200 transition list-outside duration-500 cursor-pointer shadow-lg'>Nike</button>
                <button onClick={(e) => { handelBtn(e.target.innerText) }} className='px-3 py-1 bg-red-300 mr-3 my-3 rounded-lg hover:bg-red-200 transition list-outside duration-500 cursor-pointer shadow-lg'>Adidas</button>
                <button onClick={(e) => { handelBtn(e.target.innerText) }} className='px-3 py-1 bg-red-300 mr-3 my-3 rounded-lg hover:bg-red-200 transition list-outside duration-500 cursor-pointer shadow-lg'>Puma</button>
                <button onClick={(e) => { handelBtn(e.target.innerText) }} className='px-3 py-1 bg-red-300 mr-3 my-3 rounded-lg hover:bg-red-200 transition list-outside duration-500 cursor-pointer shadow-lg'>Vans</button>
            </div>
            <div className='grid mb-10 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    data.map((ele) => {
                        return (<Card key={ele.name} img={ele.img} star={ele.star} title={ele.title} newPrice={ele.newPrice} prevPrice={ele.prevPrice} />)
                    })
                }

            </div>

        </div>
    )
}
