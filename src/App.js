import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {BrowserRouter, Route, Routes }from 'react-router-dom'
import Home from './components/Home/Home';
import Header from "./Layout/Header/Header"
import Courses from './components/Courses/Courses'
import Footer from './Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import NotFound from './Layout/NotFound/NotFound';
import PaymentSuccess from './components/payment/PaymentSuccess';
import PaymentFail from './components/payment/PaymentFail';
import Subscribe from './components/payment/Subscribe';
import CoursePage from './components/CoursePage/CoursePage'
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import DashBoard from './components/Admin/Dashboard/DashBoard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourse/AdminCourses'

function App() {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/course/:id' element={<CoursePage/>}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/changepassword' element={<ChangePassword />}/>
  <Route path='/updateprofile' element={<UpdateProfile />}/>
 
  <Route path='/profile' element={<Profile />}/>
  <Route path='/request' element={<Request />}/>
  <Route path='/register' element={<Registration/>} />
  <Route path="/about"  element={<About/>} />
   <Route path='/forgetpassword' element={<ForgetPassword/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
  <Route path='/subscribe' element={<Subscribe/>} />
  <Route path='/paymentsucess' element={<PaymentSuccess/>} />
  <Route path='/paymentFail' element={<PaymentFail/>} />
  <Route path='*' element={<NotFound/>} />




{/* Admin Routes */}


<Route path='/admin/dashboard' element={<DashBoard/>} />
<Route path='/admin/createcourse' element={<CreateCourse/>} />
<Route path='/admin/courses' element={<AdminCourses/>} />
<Route path='/admin/users' element={<Users/>}/>


  </Routes>
  <Footer/>
 </BrowserRouter>
  );
}

export default App;
