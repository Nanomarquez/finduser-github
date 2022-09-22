import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Loading from './components/Loading';
import UserFind from './components/UserFind';

function App() {
  return (
    <div className='bg-gray-800 bg-blend-screen h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
          <div className='absolute h-[40rem] w-[40rem] bg-gradient-to-br from-orange-600 to-red-800 rounded-full left-2/3 -top-52 shadow-lg blur-sm hover:blur-0 duration-300'></div>
    <div className='absolute h-[50rem] w-[50rem] bg-gradient-to-br from-sky-600 to-green-800 rounded-full right-2/3 top-56 shadow-lg blur-sm hover:blur-0 duration-300'></div>
    <div className='h-'></div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/:user' element={<UserFind/>}/>
        <Route path='*' element={<Loading/>}/>
      </Routes>
    </div>
  )
}

export default App