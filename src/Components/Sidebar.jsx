

import React from 'react'

const Sidebar = ({handelChekbox}) => {
    return (
        <div className='flex w-48 flex-col p-5 justify-between fixed top-0 bottom-0 bg-gray-200 shadow-lg '>
            {/* Category Section */}
            <SidebarSection section="Category" choises={category} handelChekbox={handelChekbox} />
            <SidebarSection section="Price" choises={Price} handelChekbox={handelChekbox}  />
            <SidebarSection section="Colors" choises={Colors} handelChekbox={handelChekbox} />
        </div>
    )
}

const category = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Sneakers"
    },
    {
        id: 3,
        name: "Flats"
    },
    {
        id: 4,
        name: "Sandals"
    },
    {
        id: 5,
        name: "Heels"
    }
]

const Price = [
    {
        id: 1,
        name: "All",
        min:0,
        max:0
    },
    {
        id: 2,
        name: "$0-$50",
        min:0,
        max:50,
    },
    {
        id: 3,
        name: "$50-$100",
        min:50,
        max:100,
    },
    {
        id: 4,
        name: "$100-$150",
        min:100,
        max:150,
    },
    {
        id: 5,
        name: "Over$150",
        min:150,
        max:Infinity,
    }
]

const Colors = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Black"
    },
    {
        id: 3,
        name: "Blue"
    },
    {
        id: 4,
        name: "Green"
    },
    {
        id: 5,
        name: "White"
    }
]
const SidebarSection = (props) => {
    return (
        <div>
            <h2 className=' text-xl underline font-bold '> {props.section} : </h2>
            {
                props.choises.map((ele) => {
                    return (
                        <div className='flex my-1  items-center' key={ele.id}>
                            <input className='' type="radio" name='type' id={props.section === "Price" ? ele.name +" "+props.section +" "+ele.min+" "+ele.max : ele.name +" "+props.section} onClick={(e)=>{props.handelChekbox(e.target.id)}} />
                            <p className='text-start ml-5' > {ele.name} </p>
                        </div>
                    )
                })
            }
        </div>
    );
}




export default Sidebar;