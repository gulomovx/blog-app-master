'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const AddProduct = () => {
  const [image, setImage]=useState(false)
  const [data, setData]=useState({
    title:'',
    description:'',
    category:'Startup',
    author:'web',
    authorImg:'/profile_icon.png'
})
const onChangeHandler=(event)=>{
  const name=event.target.name
  const value=event.target.name
  setData(data=>({...data,[name]:value}))
  console.log(data);
}
  return (
    <div>
      <form action="" className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image" className="">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={140} alt='img'/>
        </label>
        <input className='hidden'  onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' name='authorImg'  required />
     <p className="text-xl font-medium mt-4">Blog title</p>
     <input name='title' onChange={onChangeHandler} value={data.title} className='w-[60%] rounded-lg p-2 outline-none border border-slate-500' type="text" placeholder='Type here' required/>
     <p className="text-xl font-medium mt-4">Blog description</p>
     <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-[60%] rounded-lg p-2 outline-none border border-slate-500' type="text" placeholder='Type content here' cols={12} required/>
      <p className="font-medium mt-2">Blog category</p>
      <select name='category' onChange={onChangeHandler} value={data.category} id="countries" class="h-12  border border-gray-300 text-gray-600 text-base rounded-lg block  py-2.5 px-2 focus:outline-none">
      <option value="Startup">Startup</option>
      <option value="Technology">Technology</option>
      <option value="Lifestyle">Lifestyle</option>
      </select>
      <button  className="px-8 py-2 w-56 mt-8 text-xl text-white bg-slate-500">Add</button>
      </form>
    </div>
  )
}

export default AddProduct