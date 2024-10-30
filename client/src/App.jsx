import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import WebDesign from './pages/WebDesign'
import SEO from './pages/SEO'
import PPC from './pages/PPC'
import EmailMark from './pages/EmailMark'
import SocialMark from './pages/SocialMark'
import Footer from './components/Footer'
import { mainService, wdData, SeoData, PpcData, EmData, SmData } from './data/Content.js'
import { HomeBanner, ServiceBanner, TeamBanner, WDBanner, SEOBanner, PPCBanner, EMBanner, SMBanner } from './data/BannerData.js'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home banner={HomeBanner} />} />
            <Route path="/services" element={<Services data={mainService} banner={ServiceBanner} />} />
            <Route path="/team" element={<Team banner={TeamBanner} />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/services/web-design" element={<WebDesign data={wdData} banner={WDBanner} />} />
            <Route path="/services/search-engine-optimization" element={<SEO data={SeoData} banner={SEOBanner}  />} />
            <Route path="/services/pay-per-click-advertising" element={<PPC data={PpcData} banner={PPCBanner}  />} />
            <Route path="/services/email-and-sms-marketing" element={<EmailMark data={EmData} banner={EMBanner}  />} />
            <Route path="/services/social-media-marketing" element={<SocialMark data={SmData} banner={SMBanner}  />} />

            <Route element={<PrivateRoute />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>

        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
