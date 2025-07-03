import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/auth/Input'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import ProfilePhotoSelector from '../../components/auth/ProfilePhotoSelector'

const SignUp = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
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
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to sign up
        </p>
        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePicture} setImage={setProfilePicture} />

          <div className='w-full'>
            <div className='flex justify-between gap-4 mb-4 w-full'>
              <Input
                type='text'
                label='Full Name'
                placeholder='Jon Doe'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                type='email'
                label='Email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                type='password'
                label='Password'
                placeholder='Min 8 characters'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                  {showPassword ? 
                    <FaRegEye size={22} className='text-primary' /> :  
                    <FaRegEyeSlash size={22} className='text-primary' />
                  }
                </span>
              }
            </div>
            {error && <p className='text-red-600 py-2 text-sm'>{error}</p>}
            <button type='submit' className='btn-primary cursor-pointer'>
              Sign Up
            </button>
          </div>

          <p className='text-xs text-slate-700 mt-4'>
            Already have an account? <Link to='/login' className='text-violet-600'>Log In</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp