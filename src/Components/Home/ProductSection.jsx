import React from 'react'
import { Card } from './Card'
import { useQuery } from '@tanstack/react-query';
import { fetchProducsByCategory, filterByPrice, filterByRate, filterByTitle } from '.';
import errorIcon from './icons/Animation - 1717865884271.gif'
import { BeatLoader } from 'react-spinners';


export const ProductSection = ({ ccurrentCategory, input, rate, price }) => {

    const { data: products, isLoading: productLoding, error: productErorr } = useQuery({
        queryKey: ["producs", [ccurrentCategory, input, price, rate]],
        queryFn: async () => {
            let filteredProducts = await fetchProducsByCategory(ccurrentCategory)
            filteredProducts = await filterByTitle(filteredProducts, input);
            filteredProducts = await filterByPrice(filteredProducts, price);
            filteredProducts = await filterByRate(filteredProducts, rate);
            return filteredProducts;
        }
    });


    if (productErorr) {
        return (
            <div className='flex items-center gap-10 justify-center '>
                <h1 className=' font-bold font-bebas-neue text-3xl text-red-800 '>
                    There is an  Error in fetching product list
                </h1>
                <img src={errorIcon} className=' size-16 ' alt="Error" />
            </div>
        )
    }


    if (productLoding) {
        return (
            <div className=' flex items-center justify-center '>
                <BeatLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <>
            {
                products?.length > 0 ?
                    <div className='grid  w-full mb-10 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            products?.map((ele) => {
                                return (
                                <Card
                                    key={ele.id}
                                    img={ele.image}
                                    title={ele.title}
                                    price={ele.price}
                                    des={ele.description}
                                    rate={ele.rating.rate}
                                    view={ele.rating.count}
                                />)
                            })
                        }
                    </div>
                    :
                    <div className='flex items-center w-full  gap-10 justify-center  '>
                        <h1 className=' font-bold font-bebas-neue text-3xl  text-red-800 '>
                            No  Products  Search  Result 
                        </h1>
                        <img src={errorIcon} className=' size-16 ' alt="Error" />
                    </div>
            }
        </>
    )
}
