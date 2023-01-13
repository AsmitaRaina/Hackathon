import React from 'react'
import Detect from "../Detect/Detect"

const Dashboard = () => {
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <Detect/>
  )
}

export default Dashboard