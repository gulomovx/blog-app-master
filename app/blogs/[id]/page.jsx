"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-300 py-5  px-5 md:px-12 lg:px-28 ">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
          <Image src={assets.logo} alt="img" className="w-[130px] sm:w-auto" />
            
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-slate-500 shadow-[-7px_7px]">
            Get started <Image src={assets.arrow} alt="img" />
          </button>
        </div>
        <div className="text-center my-24">
                  <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto"> {data.title}</h1>
                  <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt="img" />
                  <p className="text-2xl m-1 pb-2  max-w-[740px] mx-auto">{ data.author}</p>
        </div>
          </div>
          <div className="mx-5 w-[800px] md:mx-auto mt-[-100px] mb-10 lg:mx-auto">
              <Image className="mx-auto rounded-lg" src={data.image} width={640} height={200} alt="img" />
              <h2 className="my-8 text-[25px] font-semibold">Introduction:</h2>
              <p className="">{data.description}</p>
              <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-reflection and goal</h3>
              <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab facilis nisi! </p>
              <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab facilis nisi! </p>
              <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-reflection and goal</h3>
              <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab facilis nisi! </p>
              <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab facilis nisi! </p>
              <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ab facilis nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit laudantium vero dolores quod ratione esse repellat autem facilis doloribus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non eum incidunt. Blanditiis deleniti velit, pariatur ex delectus veritatis voluptatem?</p>
        <div className="my-24">
          <p className="text-slate-800">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt=""/>
            <Image src={assets.twitter_icon} width={50} alt=""/>
            <Image src={assets.googleplus_icon} width={50} alt=""/>
          </div>

        </div>
      </div>
      <Footer/>
      
      </>
      
  ) : (
    <></>
  );
};

export default Blog;
