import React, { useState } from 'react'
import Announcements from '../../components/Annoucements';
import Message from '../../components/Message';
import Navbar from '../../components/Navbar'




const AnnouncementScreen = () => {
  const pages = ['Announcements', 'Students'];
  const settings = ['Profile', 'Dashboard', 'Logout'];
  const items = ['Latest', 'Unread', 'Top']
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      {/* <Navbar pages={pages} settings={settings}/> */}
      <Announcements items={items}/>
      {
        !showMessage && <button type="submit" class="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 fixed bottom-4 right-6 z-100" onClick={() => setShowMessage(true)}>
        New Topic +
      </button>
      }
      { showMessage &&  <Message/>}
      {
        showMessage && <button type="submit" class="px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 fixed bottom-4 left-6 z-10" onClick={() => setShowMessage(!showMessage)}>
        X
      </button>
      }
    </>
  )
}

export default AnnouncementScreen