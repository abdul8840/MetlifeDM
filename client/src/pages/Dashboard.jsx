import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashContact from '../components/DashContact';

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab');
    if(tabFormUrl){
      setTab(tabFormUrl)
    }
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
      {/* side bar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* profile */}
        {tab === 'profile' && <DashProfile />}
      {/* contact */}
      {tab === 'contact' && <DashContact />}
    </div>
  )
}

export default Dashboard