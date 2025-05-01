import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    

    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        
        setEmail("");
        setPassword("");
    } 

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black'>
      <div className=' rounded-xl border-2 border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className='flex flex-col items-center justify-center'
        >
            <input 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            required 
            className=' text-white placeholder:text-gray-400 outline-none bg-transparent py-4 px-5 text-xl border-2 border-emerald-600 rounded-full ' 
            type="email" 
            placeholder='Enter Your Email' 
            />
            <input value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}

            required 
            className=' text-white mt-5 placeholder:text-gray-400 outline-none bg-transparent py-4 px-5 text-xl border-2 border-emerald-600 rounded-full ' 
            type="password" 
            placeholder='Enter Your Password' 
            />
            <button className=' outline-none text-white py-4 px-5 text-xl bg-emerald-600 rounded-full border-none mt-7'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
