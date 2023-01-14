import React from 'react'

import hero_image from '../assets/cyber-bg.png'
import './Hero.css'

const Hero = () => {
    return (
        <div name='home' className='w-full bg-blue-500 bg-blend-multiply h-screen flex flex-col justify-between bg-[url("/src/assets/vjti_image.jpg")] bg-no-repeat bg-cover'>
            
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto bg-slate-700 bg-opacity-75 rounded-3xl text-slate-50 p-10 pt-0'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Industry leading placements</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>A one stop portal for Placements</h1>
                    <p className='text-1xl'>Welcome to the recruitment website For VJTI.</p><br /><p className='text-1xl'>VJTI is India's foremost industrial leadership development institution. Our Graduates are a combination of rigorous thinking, hardwork and fundamental stronghold. They are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin... </p>

                </div>
                <div>
                    <img className='w-full' src={hero_image} alt="/" />
                </div>
                {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Hero