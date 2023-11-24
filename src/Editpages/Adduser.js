import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  let Navigate = useNavigate()
  const [user,setUser] = useState({
    name:"",
    username:"",
    email:""
})
const {name,username,email} = user
const onInputChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}
const onSubmit = async (e)=>{
  e.preventDefault()
  await axios.post("http://localhost:8080/user",user)
  Navigate('/')
}
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
          <form onSubmit={(e)=>onSubmit(e)}>
        <h2 className='text-center m-4'>Register User</h2>
        <div className='mb-3'>
          <label htmlFor='Name' className='form-label'>
            Name
          </label>
          <input
          type={"text"}
          className='form-control'
          name='name'
          placeholder='Enter Your Name'
          value={name}
          onChange={(e)=>onInputChange(e)}
          />
          </div>
        <div className='mb-3'>
          <label htmlFor='UserName' className='form-label'>
            UserName
          </label>
          <input
          type={"text"}
          className='form-control'
          name='username'
          placeholder='Enter Your UserName'
          value={username}
          onChange={(e)=>onInputChange(e)}
        />
          </div>
        <div className='mb-3'>
          <label htmlFor='Email' className='form-label'>
            Email
          </label>
          <input
          type={"text"}
          className='form-control'
          name='email'
          placeholder='Enter Your Emailaddress'
          value={email}
          onChange={(e)=>onInputChange(e)}
        />
        </div>
        <button type='Submit' className='btn btn-outline-primary mx-2'>Submit</button>
        <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
        </form>
        </div>
      </div>
    </div>
  )
}
