import React, { useState } from 'react';
import Navbar from './components/menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import ContactUs from './components/contact';
import Home from './components/home';
import Footer from './components/footer';
import Aboutus from './components/aboutus';
import AdminPortal from './components/adminportal';
import AdminNavbar from './components/AdminNavbar';
import AdminAddNews from './components/adminaddnews';
import AdminAddEvents from './components/Adminaddevents'; // Import the new component
import ViewMembers from './components/viewmembers';
import Messages from './components/messages';
import NewsPage from './components/newspage';
import UserPage from './components/UserPage';
import Events from './components/events';
import UpdateMembersPage from './components/updatemembers';
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <div className='app'>
        {isAdmin ? <AdminNavbar /> : <Navbar />}
        <Routes>
          <Route path='/admin/*' element={<AdminPortal setIsAdmin={setIsAdmin} />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/news' element={<NewsPage/>} />
          <Route path='/admin/addnews' element={<AdminAddNews />} />
          <Route path='/admin/addevents' element={<AdminAddEvents />} /> 
       <Route path='/admin/veiwmembers' element={<ViewMembers/>}/>
       <Route path='/admin/messages' element={<Messages/>}/>
       <Route path='/login/user' element = {<UserPage/>}/>
       <Route path='/events' element = {<Events/>}/>
       <Route path='/admin/update-members' element={<UpdateMembersPage/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
