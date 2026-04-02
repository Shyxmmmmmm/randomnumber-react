import { useState } from 'react'

const Body = () => {

    const [number, func1] = useState(0)
    const [touched, func2] = useState(false)
    const [increment, func3] = useState(0)

    const change = () => {
        func1(Math.floor(Math.random() * 100) + 1)
        func2(true)
        func3(increment+1)
    }

    return (
        <div className="flex items-center justify-center p-10 ">
            <div className="shadow-2xl flex p-5 flex-col items-center justify-center bg-white md:w-[65%] w-[100%]  lg:w-[45%] rounded-2xl">
                <span className={`text-center pt-2 font-bold text-[#7242FA] ${touched === true ? 'invisible' : 'visible'}`}>Generate random numbers between 1 and 100</span>
                <div className='flex flex-col items-center justify-center p-5 w-[80%] h-[200px]  bg-[#ECE9FF] rounded m-5'>
                    <span className={`text-center ${number === 0 ? 'text-[#7242FA] text-md' : 'text-6xl font-semibold text-[#7242FA]'}`}>{number === 0 ? 'No Number Generated Yet' : number}</span>
                </div>
                <button onClick={change} className="p-3 rounded-full border text-white bg-gradient-to-r from-[#9518FA] via-[#6649FB] to-[#3159FB] hover:scale-110 duration-700 hover:shadow-2xl  ">Generate Random number</button>
                
                
                {touched &&(<div className={`mt-3 w-full`}>
                    <div className=' w-full border-t-2 border-[#CCCDD3]'></div>
                    <div className='px-10 flex items-center justify-between mt-3'>
                        <div className='flex  items-center justify-center flex-col gap-2'>
                            <label className='text-md text-black' htmlFor="">Count</label>
                            <span className='text-[#7242FA] font-bold text-sm'>{increment}</span>
                        </div>
                        <div className='flex  items-center justify-center flex-col gap-2'>
                            <label className='text-md text-black' htmlFor="">Current</label>
                            <span className='text-[#7242FA] font-bold text-sm'>{number}</span>
                        </div>
                        <div className='flex  items-center justify-center flex-col gap-2'>
                            <label className='text-md text-black' htmlFor="">Max</label>
                            <span className= 'font-bold text-[#7242FA] text-sm'>100</span>
                        </div>
                    </div>
                </div>)}
            </div>


        </div>
    )
}
export default Body