import React, { useRef, useState } from 'react'
import { LuTrash, LuUpload, LuUser } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null);
    const [previewURL, setPreviewURL] = useState(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewURL(preview);
        }
    }

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewURL(null);
    }

    const onChooseFile = () => {
        inputRef.current.click();
    }

  return (
    <div className='flex justify-center mb-6'>
      <input
      type='file'
      accept='image/*'
      ref={inputRef}
      onChange={handleImageChange}
      className='hidden'
      />
      {!image ? (
        <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative'>
          <div className=''>
            <LuUser className='' />
            
            <button onClick={onChooseFile} className='w-8 h-8 flex items-center justify-center bg-primary text-white absolute rounded-full -bottom-1 right-10' type='button'>
              <LuUpload className='text-white bg-violet-400 rounded-full p-1 text-2xl cursor-pointer hover:bg-violet-600 transition-all duration-300' />
            </button>
            </div>
        </div>
      ) : (
        <div className='relative'>
          <img src={previewURL} alt='Profile photo' className='w-24 h-24 rounded-full object-cover border-2 border-violet-200 shadow-md' />
          <button type='button' onClick={handleRemoveImage} className='absolute bottom-0 right-0'>
            <LuTrash className='text-red-400 text-2xl cursor-pointer hover:text-red-600 transition-all duration-300' />
          </button>
        </div>
      )}

    </div>
  )
}

export default ProfilePhotoSelector