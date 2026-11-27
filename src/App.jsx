import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'
import bg1 from './assets/bg1.jpg'

function App() {
  return (
    <div className='h-screen bg-white text-black h-screen w-screen'>
        <div className="h-[978px] bg-[url('./assets/bg1.jpg')] bg-no-repeat bg-cover">
           <Header />
        </div>
       
        <Outlet />
    </div>
  )
}

export default App

