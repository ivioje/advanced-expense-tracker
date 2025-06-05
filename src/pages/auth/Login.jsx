import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'

const Login = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if(!password){
      setError('Password is required');
      return;
    }
    if(password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    setError('');
  }
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>
        <form onSubmit={handleLogin}>
          <Input
            type='email'
            label='Email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full'
          />
          <Input
            type='password'
            label='Password'
            placeholder='Min 8 characters'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full'
          />
          {error && <p className='text-red-600 py-2 text-sm'>{error}</p>}
          <button type='submit' className='btn-primary cursor-pointer'>
            Log In
          </button>

          <p className='text-xs text-slate-700 mt-4'>
            Don't have an account? <Link to='/signup' className='text-violet-600'>Sign Up</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
