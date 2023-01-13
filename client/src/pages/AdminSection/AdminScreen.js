import React, { useState } from 'react'
import Announcements from '../../components/Annoucements';
import Contacts from '../../components/company components/contacts';
import Sidebar from '../../components/company components/global/Sidebar';
import Message from '../../components/Message';
import Navbar from '../../components/Navbar'
import AnnouncementScreen from './AnnouncementScreen';




const AdminScreen = () => {
  const pages = ['Announcements', 'Students'];
  const settings = ['Profile', 'Dashboard', 'Logout'];
  const items = ['Latest', 'Unread', 'Top']
  const [showMessage, setShowMessage] = useState(false);
  const path = window.location.pathname;
  console.log(window.location.pathname);
  return (
    <>
      <div className='flex'>
        <div >
          <Sidebar type={'admin'}  type2={'announcements'}/>
        </div>
        {
          path === '/admin' ? 
          <div className="w-full">
            <></>
          </div> : 
          path === '/admin/announcements' ?
          <div className="w-full">
            <AnnouncementScreen/>
          </div> : 
          path === '/admin/history' ?
          <div className="w-full">
            <Contacts/>
          </div> :
          <></>
        }
      </div>
    </>
  )
}

export default AdminScreen