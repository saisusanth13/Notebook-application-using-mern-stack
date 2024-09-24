import React from 'react'
import clip from './images/clip.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Login = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    let history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3008/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          }); 
          const json = await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.jwtData)
            history.push("/");
          }else{
            alert("invalid credentials")
          }

    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <>
   <div className="container flex justify-center">
   

    <div className="box">
        <div className='flex justify-center'>
            <img src={clip} className='h-28 items-center ' alt="" />
        </div>
    <div className='-mt-12'>  
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 206.5,173.5 413,147 653,147 C 893,147 1166.5,173.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#000000" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    </div>
    <div className="px-4 w-96 text-left bg-black shadow-lg">
        <h3 className="text-2xl -mt-1 text-center  text-white hover:text-neutral-400 font-bold font-serif">Login to your Account</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className="mt-4">
                <div>
                    <label className="block text-white hover:text-neutral-400 font-bold text-sm font-serif" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email" name="email" value={credentials.email} onChange={onChange}
                                className="w-full px-4 py-2 mt-2 border  text-black font-bold text-sm font-serif rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div className="mt-4">
                    <label className="block text-white hover:text-neutral-400 font-bold text-sm font-serif">Password</label>
                            <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md  text-black  font-bold text-sm font-serif focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div className="flex items-baseline justify-between p-3">
                    <button className="px-6 py-2 mt-4 text-white hover:text-neutral-400 font-bold text-sm font-serif bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    <a href="/" className="t text-white hover:text-neutral-400 font-bold text-sm font-serif  hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
    </div>
    <div className='-mt-1'>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 250,228.5 500,257 740,257 C 980,257 1210,228.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#000000" className="transition-all duration-300 ease-in-out delay-150 path-0 " transform="rotate(-180 720 200)"></path></svg>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login