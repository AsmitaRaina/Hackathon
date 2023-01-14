import React from 'react'
import Sidebar from "../components/student_components/global/Sidebar"
import Dashboard from '../components/student_components/Dashboard/Dashboard'
import Announcements from '../components/student_components/Annoucements/Annoucements'

const StudentScreen = () => {
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <div className='flex'>
      <div >
        <Sidebar />
      </div>
      {
        path === '/student' ?
          <div className="w-full">
            <Dashboard/>
          </div> :
          path === '/student/annoucements' ?
            <div className="w-full">
              <Announcements/>
            </div> :
            // path === '/company/hr' ?
            //   <div className="w-full">
            //     <HR />
            //   </div> :
            <></>
      }

    </div>
  )
}

export default StudentScreen