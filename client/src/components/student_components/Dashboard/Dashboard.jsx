import React from 'react'
import Detect from "../Detect/Detect"

const Dashboard = () => {
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <div className='h-[900px]'>
      <Detect/>
    </div>
  )
}

export default Dashboard