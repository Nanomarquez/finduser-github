import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
function Home() {
  const navigate = useNavigate();
  const [user,setUser] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const user = e.target['username'].value
    setUser(user)
  }

  return (
    <Tilt glareEnable={true} glareBorderRadius='1rem'>
    <div className='tilt h-96 p-4 w-80 flex items-center justify-center relative bg-slate-600/50 opacity-80 rounded-2xl shadow-5xl border border-b-0 border-r-0 border-opacity-10'>
    <form onSubmit={(e)=>handleSubmit(e)} className='h-full flex flex-col justify-evenly items-center'>
      <h1 className='text-2xl text-center text-white shadow-sm tracking-tight'>Buscador de usuarios Github</h1>
      <p className='text-center text-white text-md'>Ingresa un perfil de GitHub y consulta sus estadísticas mas recientes.</p>
      <input className='p-1 rounded bg-white/20 placeholder:text-white outline-none text-white' type="text" name='username' placeholder='Nombre de usuario'/>
      <button onClick={navigate(`/user/${user}`)} className='px-4 py-2 rounded bg-black/80 hover:bg-black duration-150 text-white font-bold'>Buscar</button>
      <p className='text-center text-white text-sm'>Creado por <a href="https://github.com/Nanomarquez/" className='hover:text-gray-500 text-white'>Nano Marquez</a></p>
    </form>
    </div>
    </Tilt>
  )
}

export default Home