import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Tilt from 'react-parallax-tilt';

function UserFind() {
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
  const [repos,setRepos] = useState([])
  const params = useParams()
  const user = params.user
  const endpointAPI = 'https://api.github.com/users/'
  useEffect( ()=>{
    const arr = []
    axios(`${endpointAPI}${user}`)
    .then(res=>{
      setData(res.data)
      setLoading(false)
      axios(`${res.data.repos_url}`)
      .then(res=>{
       arr.push(res.data[0],res.data[1],res.data[2])
       setRepos(arr)
      })
    })
  },[params])

console.log(repos[0])
  return (
    <>
    {loading && <Loading/>}
    {!loading && 
    <Tilt  glareEnable={true} glareBorderRadius='1rem'>
    <div className='contain h-[190px] p-4 w-[370px] flex items-center justify-center relative rounded-2xl flex-col bg-gradient-to-tr from-gray-500 to-white opacity-80 hover:opacity-100 shadow-2xl hover:h-[450px] duration-200 border-opacity-50 border-2 border-black border-t-0 border-l-0'>
    <h1 className='name pt-10 text-2xl tracking-wide duration-200'>{data.name}</h1>
    <img className='w-[150px] h-[150px] absolute bg-black/40 rounded-full shadow-4xl shadow-black/70 object-cover overflow-hidden -translate-y-24 duration-200' src={data.avatar_url} alt={data.login} />
    <h2 className='detail duration-200 text-gray-600'>{data.company}</h2>
    <h2 className='detail duration-200 text-gray-600'>{data.location}</h2>
    <ol className='ol text-center hidden duration-200 gap-3 border-t'>
      <li>Seguidores</li>
      <li>Siguiendo</li>
      <li>Repositorios</li>
      <li className='bg-black text-white rounded-full'>{data.followers}</li>
      <li className='bg-black text-white rounded-full'>{data.following}</li>
      <li className='bg-black text-white rounded-full'>{data.public_repos}</li> 
    </ol>
    <div className='repos duration-200 hidden gap-2 border-t w-[290px]'>
      <h1 className='text-2xl '>Ultimos repositorios</h1>
      <ol className='text-xl'>
        {repos[0]!==undefined && repos?.map((e)=>(
          <li key={e.id} className='hover:text-white capitalize'><a href={e.html_url} target="_BLANK">{e.name}</a></li>
        ))}
      </ol>
    </div>
    <div className='links hidden absolute'> <a href="/"><img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/arrow_bend_up_left_icon_174118.png" alt="" /></a>
    <a href={data.html_url} target='_BLANK'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>

    </div>
    </div>
    </Tilt>
    }
    </>
  )
}

export default UserFind