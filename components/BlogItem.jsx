import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title, description, category, image, id}) => {
  return (
      <div className='max-w-[330px]  sm:max-w-[300px] bg-white border border-slate-700 rounded-lg hover:overflow-hidden  transition-all '>
          <Link href={`/blogs/${id}`}>
          <Image className='hover:transform transition-all duration-300 object-cover rounded-lg ease-out hover:scale-110  cursor-pointer' src={image} alt='img' width={400} height={400} />
              
          </Link>
          <p className="text-2xl ml-5 mt-4 p-1 inline-block  text-slate-9
          00 font-semibold  ">{category}</p>
          <div className="p-5">
              <h2 className="mb-2 text-lg font-medium tracking-tighter text-gray-800">{title}</h2>
              <p className="mb-3 text-sm tracking-tighter text-gray-700">{description}</p>
              <div className="flex items-center py-2 font-semibold text-center gap-2  hover:gap-4 transition-all cursor-pointer   ">
                  Read more <Image src={assets.arrow} className='ml-2' alt='' width={12}/>
                  <div className="">asdfg</div>
              </div>
          </div>
    </div>
  )
}

export default BlogItem