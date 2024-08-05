import React from 'react'
import { useState } from 'react'

export const UserForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        var emailValid = false
        if(email === ""){
            setEmailError("Email cannot be empty")
        } else if (email.length < 6){
            setEmailError("Email must be at least 6 characters")
        } else if (email.indexOf(' ') >= 0){
            setEmailError("Email cannot contain spaces")
        } else {
            setEmailError("")
            emailValid = true
        }

        if(emailValid){
            alert('Email: ' + email + '\nPassword: ' + password)
            setEmail("")
            setPassword("")
        }

        
        
    }


  return (
    <div className='w-[30%] bg-white shadow-lg p-10 rounded m-auto gap-2 flex flex-col'>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <label className='text-lg' htmlFor="email">Email address</label>
            <input className='p-2 border rounded' type="email" placeholder='Enter email' value={email} onChange={handleEmailChange}/>
            <p className='text-xs'>We'll never share your credentials</p>
            <label htmlFor="password">Password</label>
            <input className='p-2 border rounded' type="password" placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
            <div className='flex gap-2'>
            <input type="checkbox" name="checkMeOut" id="checkMeOut" />
            <label htmlFor="checkMeOut">Check me out</label>
            </div>
            <button type='submit' className='p-2 text-white bg-blue-500 rounded'>Submit</button>
        </form>

        {emailError.length > 0 && <p className='text-red-500'>{emailError}</p>}
        Email entered: {email}
        <br />
        Password entered: {password}
    </div>
  )
}
