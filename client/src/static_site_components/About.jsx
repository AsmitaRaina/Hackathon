import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Why VJTI </h2>
                    <p className='text-3x1 py-6 text-gray-500'>VJTI Mumbai (estd. in 1887 as Victoria Jubilee Technical Institute) has pioneered India’s Engineering education, research and training ecosystem. Pre-independence, VJTI had been instrumental in driving industrial growth throughout united India. Post-independence, VJTI played a pivotal role in setting up IITs and RECs of India and strengthened technology excellence of country.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>98%</p>
                        <p className='text-gray-400 mt-2'>Placed, 2022</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>100+</p>
                        <p className='text-gray-400 mt-2'>Company contacts</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>10K</p>
                        <p className='text-gray-400 mt-2'>Placed Till Date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About