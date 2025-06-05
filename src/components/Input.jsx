import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Input = ({ value, onChange, placeholder, label, type, className }) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>

      <div className='input-box'>
        <input
            type={type == 'password' ? showPassword ? 'text' : 'password' : type}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            className='w-full bg-transparent outline-none'
        />
        {type === 'password' && (
            <span onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                {showPassword ? 
                    <FaRegEye size={22} className='text-primary' /> :  
                    <FaRegEyeSlash size={22} className='text-primary' />
                }
            </span>
        )}
      </div>
    </div>
  )
}

export default Input