import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar'
import { Router1 } from './Router1'
import { useNavigate } from 'react-router-dom'
import { Register } from './components/Register'
import { Login } from './Login'
import { useIdleTimer } from 'react-idle-timer' 

function App() {
  
const auth=sessionStorage.getItem('mainsession')
const reg=sessionStorage.getItem('register1')
const history=useNavigate()
console.log(auth)
console.log(reg)
const onIdle = () => {
  // Close Modal Prompt
  // Do some idle action like log out your user
  sessionStorage.clear()
}

const onActive = (event) => {
  // Close Modal Prompt
  // Do some active action
  sessionStorage.clear()
  history('/login')


}


const {} = useIdleTimer({
    onIdle,
  onActive,
  crossTab:true,
  timeout: 1000 * 60 * 15,
//   // promptTimeout: 0,
//   // events: [
  //   'mousemove',
  //   'keydown',
  //   'wheel',
  //   'DOMMouseScroll',
  //   'mousewheel',
  //   'mousedown',
  //   'touchstart',
  //   'touchmove',
  //   'MSPointerDown',
  //   'MSPointerMove',
  //   'visibilitychange'
  // ],
  // immediateEvents: [],
  // debounce: 0,
  // throttle: 0,
  // eventsThrottle: 200,
  // element: document,
  // startOnMount: true,
  // startManually: false,
  // stopOnIdle: false,
  // crossTab: false,
  // name: 'idle-timer',
  // syncTimers: 0,
  // leaderElection: false
})
  return (
   
      <>
   
     { auth? <><Navbar/> <Router1/></>:reg ?<><Register/></>:<><Login/></> }
     
    </>
  )
}

export default App
