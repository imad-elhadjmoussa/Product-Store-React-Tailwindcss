import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '.';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import errorIcon from './icons/Animation - 1717865884271.gif'
import { CategorySection } from './CategorySection';
import { PriceSection } from './PriceSection';
import { RateSection } from './RateSection';
import { ProductSection } from './ProductSection';
import { motion } from 'framer-motion';


export const Main = ({ input }) => {

    const [ccurrentCategory, setCategory] = useState("All");
    const [rate, setRate] = useState(0);
    const [price, setPrice] = useState("All")

    // Fetch gategories
    const { data: categories, isLoading: categoriesLoding, error: categoriesError } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });


    if (categoriesError) {
        return (
            <div className='w-screen h-screen flex flex-col gap-10 items-center justify-center'>
                <h1 className=' font-bold font-bebas-neue text-5xl text-red-800 '>
                    There is an  Error
                </h1>
                <img src={errorIcon} alt="Error" />
            </div>
        )
    }

    if (categoriesLoding) {
        return (
            <div className='w-screen h-screen flex items-center justify-center '>
                <BeatLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <motion.div
            className='px-[40px] mt-[100px]  flex flex-col gap-10 '
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.3}}
        >

            {/* Category List */}
            <CategorySection
                setCategory={setCategory}
                ccurrentCategory={ccurrentCategory}
                categories={categories}
            />

            {/* Select By Product price */}
            <PriceSection setPrice={setPrice} />


            {/* Select Product By Ration */}
            <RateSection rate={rate} setRate={setRate} />

            {/* Product List */}
            <ProductSection price={price} rate={rate} input={input} ccurrentCategory={ccurrentCategory} />

        </motion.div>
    )
}
