import { Link } from 'react-router-dom';


export const Navbar = ({ handelInput }) => {

    return (
            <div className='fixed z-50 flex items-center justify-between  gap-10 right-0 top-0 left-0  px-[40px] py-2 bg-primary-500'>
                {/* Logo */}
                <Link to="/" >
                    <div className=' text-3xl cursor-pointer text-cnter font-bold font-bebas-neue text-white  '>
                        STORE
                    </div>
                </Link>

                {/* Input filde */}
                <div className=' flex gap-5 w-[80%] justify-end ' >
                    <input onChange={(e) => { handelInput(e.target.value) }}
                        className='px-4 w-full py-2 max-w-[500px]  rounded-sm outline-none'
                        type="text"
                        placeholder='Enter Product Title ...'
                    />
                    
                </div>
            </div>
    )
}
