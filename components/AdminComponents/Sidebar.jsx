import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className="px-2 sm:pl-14 py-3 ">
        <Image src={assets.logo} width={120} alt=''/>
      </div>
      <div className="w-32 sm:w-80 h-[100vh] relative py-12  ">
        <div className="w-[50%] sm:w-[80%] absolute right-0"></div>
        <Link href={`/admin/addProduct`} className="flex items-center border border-slate-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
          <Image alt='' src={assets.add_icon} width={28} /><p className="hidden md:block">Add blogs</p>
        </Link>
        <Link href={`/admin/blogList`} className=" my-4 flex items-center border border-slate-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
          <Image alt='' src={assets.blog_icon} width={28} /><p className="hidden md:block">Blog lists</p>
        </Link>
        <Link href={`/admin/subscription`} className="flex items-center border border-slate-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
          <Image alt='' src={assets.email_icon} width={28} /><p className="hidden md:block">Subscriptions</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar