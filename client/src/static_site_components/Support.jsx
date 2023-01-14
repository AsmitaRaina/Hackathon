import React from 'react';

//import { CogIcon,ServerIcon } from '@heroicons/react/outline';
//import { ChipIcon } from '@heroicons/react/solid'


import supportImg from '../assets/director.png'

const Support = () => {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Director's Message</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>VJTI continues to be ranked as the top university of the country and among the best in the world. VJTI attracts the brightest students... </h3>
                    <p className='py-4 text-3xl text-slate-300'>~Dr. Sunil Bhirud</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <ServerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] text-center' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
</svg>

                            <h3 className='font-bold text-2xl my-6 text-center'>Computer Engineering</h3>
                            <p className='text-gray-600 text-xl text-center'>The department of Computer Technology was established in 1985. It is one of the youngest department in the Institute. Department attracts top rank students to pursue their education. Placement record is excellent in the department, 100% eligible students secure their jobs in dream companies. </p>
                        </div>
                        
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <CogIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

                            <h3 className='font-bold text-2xl my-6 text-center'>Mechanical Engineering</h3>
                            <p className='text-gray-600 text-xl text-center'>Established in 1887, the department of Mechanical engineering remains among the premier departments of VJTI. It has had a long and illustrious history and offers courses at the graduate and postgraduate levels. The department is recognized for doctoral research by the University of Mumbai.</p>
                        </div>
                        
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            {/* <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>

                            <h3 className='font-bold text-2xl my-6 text-center'>Electronics Engineering</h3>
                            <p className='text-gray-600 text-xl text-center'>The Electronics Engineering is recognized for doctoral research heritage and competent faculty members in many diverse fields. The Department has laboratories needed for the teaching and practical experiments of various courses stated above. Apart from the regular teaching of diploma, UG and PG courses, the department has excellent industry institute interaction. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
