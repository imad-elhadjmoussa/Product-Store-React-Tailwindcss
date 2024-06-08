import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

export const PriceSection = ({setPrice}) => {
    return (
        <div className=' flex gap-5 flex-col '>
            <h1 className='text-3xl font-bold text-gray-900 text-center '>
                Filter By Product Price
            </h1>
            <div className=' flex justify-center flex-wrap w-full gap-3 '>
                <RadioGroup
                    row
                    onChange={(e) => { setPrice(JSON.parse(e.target.value)) }}
                >
                    <FormControlLabel value='{"min":0,"max":1000000000 }' control={<Radio defaultChecked/>} label="All" />
                    <FormControlLabel value='{"min":0,"max":50 }' control={<Radio/>} label="$0-$50" />
                    <FormControlLabel value='{"min":50,"max":200 }' control={<Radio />} label="$50-$200" />
                    <FormControlLabel value='{"min":200,"max":500 }' control={<Radio />} label="$200-$500" />
                    <FormControlLabel value='{"min":500,"max":2000 }' control={<Radio />} label="$500-$2000" />
                    <FormControlLabel value='{"min":2000,"max":100000000}' control={<Radio />} label="$2000 ++" />
                </RadioGroup>
            </div>
        </div>
    )
}
