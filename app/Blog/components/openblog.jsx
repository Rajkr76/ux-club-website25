"use client";

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { blogData, getBlogById } from './blogData'

function OpenBlog({ blog }) {
  
// Use default blog if none provided
  const currentBlog = blog || {
    id: 1,
    Date: "# DATE: 25/09/25",
    subtitle: "B_001",
    description: "",
    image: "https://images.unsplash.com/photo-1655669357124-394d107b3aaf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  // Get related blogs (excluding current one)
  const relatedBlogs = blogData.blogs.filter(b => b.id !== currentBlog.id).slice(0, 5);

  return (
    <>
      <section className="w-full xl:pt-10 lg:pt-10 pt-8 min-h-screen bg-black">
        {/* Navigation bar */}
        <nav className="flex justify-between items-center px-4 lg:px-4 xl:px-7 mt-4 shadow-sm border-b bg-black">
          <div className='flex items-center gap-4'>
            <h1 className="font-[Neue] font-medium text-base text-white">BLOG PAGE</h1>
          </div>
        </nav>

        <div className='w-full max-w-[94rem] mx-auto px-4 py-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

            {/* Main Content Area */}
            <div className='lg:col-span-2'>
              <div className="w-full relative overflow-hidden mb-4 h-[50vh] xl:h-[65vh] lg:h-[65vh] md:h-[25vh] object-cover bg-gray-800">

                <Link href="/Blog">
                  <h2 className="text-black absolute right-5 top-3 font-bold font-[Neue] text-xl ">Close</h2>
                </Link>
                <img
                  src={currentBlog.image}
                  alt={currentBlog.image}
                  className='w-full h-full object-cover'
                  style={{ objectPosition: "10% 0%" }} 
                />
              </div>

              <div className='mb-4 px-1 '>
                <h1 className="text-2xl font-bold mb-2 font-[Neue] text-white">{currentBlog.subtitle}</h1>
                
              
                <div className='text-sm mb-4'>
                  <div className='flex items-center justify-between'>
                    <span className="text-[12px] font-bold font-[Neue] text-gray-300">{currentBlog.Date}</span>

                    <span className="text-[13px] font-bold font-[Neue] text-gray-300">{currentBlog.time_of_upload || '5 min ago'}</span>
                  </div>
                </div>
              </div>
              <hr className="py-2 text-gray-300" />
              {/* Blog Content */}
              <div className=''>

                <div 
                  className="space-y-4 leading-relaxed font-[Neue] text-justify text-gray-200"
                  dangerouslySetInnerHTML={{ __html: currentBlog.description }}
                />
                <br />
                <hr className="py-0 text-gray-300" />
                <div className="py-5 mb-6 bg-transparent">
                  <p className="text-sm mb-2 font-[Neue] text-gray-400">{currentBlog.name} BY UX CLUB</p>
                  <p className="text-sm font-[Neue] text-gray-400">Student details</p>
                </div>
              </div>
            </div>

            {/* Right side related blog posts */}
            <div className='hidden sm:block'>
              <div className='px-2 gap-3 flex flex-col'>
                {relatedBlogs.map((relatedBlog) => (
                  <Link 
                    key={relatedBlog.id}
                    href={`/Blog/openblog/${relatedBlog.id}`}
                  >
                    <div className="flex relative cursor-pointer px-2 transition-colors duration-300 w-[30vw] hover:bg-gray-800">
                      <img
                        src={relatedBlog.image}
                        alt="Related article"
                        className='w-full h-48 object-cover'
                        style={{ objectPosition: "40% 10%" }}
                      />
                      <div className="absolute bottom-4 right-4">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-gray-100 hover:text-gray-900 cursor-pointer transition-colors duration-200"
                          size="lg" 
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OpenBlog
