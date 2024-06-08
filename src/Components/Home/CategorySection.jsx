import React from 'react'

export const CategorySection = ({setCategory,categories,ccurrentCategory}) => {

    
    return (
        <div className='flex flex-col gap-5 flex-wrap w-full items-center '>
            <h1 className='text-3xl font-bold text-gray-900 text-center '>
                Filter By Product Category
            </h1>
            <div className=' flex justify-center items-center gap-5 flex-wrap '>
                <button
                    onClick={(e) => { setCategory(e.target.innerText) }}
                    className=' btn-style1 '
                    style={{ backgroundColor: ccurrentCategory === "All" && "#0e5733" }}
                >
                    All
                </button>
                {
                    categories?.map((ele) => {
                        return (
                            <button
                                key={ele}
                                onClick={(e) => { setCategory(e.target.innerText) }}
                                className=' btn-style1 '
                                style={{ backgroundColor: ccurrentCategory === ele && "#0e5733" }}
                            >
                                {ele}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}
