import React, { useRef } from 'react'
import { LuTrash, LuUpload, LuUser } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
    const inputRef = useRef(null);
    const [previewURL, setPreviewURL] = React.useState(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewURL(preview);
        }

        const handleRemoveImage = () => {
            setImage(null);
            setPreviewURL(null);
        }

        const onChooseFile = () => {
            inputRef.current.click();
        }
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
            
            <button className='w-8 h-8 flex items-center justify-center bg-primary text-white absolute rounded-full -bottom-1 right-10' type='button' onClick={onChooseFile}>
              <LuUpload />
            </button>
            </div>
        </div>
      ) : (
        <div>
          <img src={previewURL} alt='Profile photo' className='' />
          <button type='button' onClick={handleRemoveImage}>
            <LuTrash className='' />
          </button>
        </div>
      )}

    </div>
  )
}

export default ProfilePhotoSelector