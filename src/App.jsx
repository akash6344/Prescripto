import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/about'
import Contact from './pages/contact'
import MyAppointments from './pages/MyAppointments'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/doctors' element = {<Doctors/>}></Route>
        <Route path='/doctors/:specialty' element = {<Doctors/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/my-profile' element = {<Myprofile/>}></Route>
        <Route path='/my-appointments' element = {<MyAppointments/>}></Route>
        <Route path='/appointments/:docId' element = {<Appointment/>}></Route>
      </Routes>
    </div>
  )
}

export default App
