
'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [image, setImage]=useState(false)
  return (
    <div>
      <form action="" className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image" className="">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={140} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
      </form>
    </div>
  )
}

export default page