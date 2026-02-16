"use client";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Hero() {
  const [scrollDistance, setScrollDistance] = useState(-10000);
  
  useEffect(() => {
    // Calculate scroll distance on client side only
    const distance = -(typeof window !== 'undefined' ? window.innerWidth : 1920) * 0.96 * 7 - (16 * 7);
    setScrollDistance(distance);
  }, []);
  
  const images = [
    "/blog1.jpg",
    "/blog2.png",
    "/blog3.jpg",
    "/blog5.jpg",
    "/blog6.jpg",
    "/blog7.png"
    ,
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <main className='bg-black'>
      <nav className='flex justify-between xl:px-4 lg:px-4 px-4 xl:pt-14 lg:pt-14 pt-10'>
        {/* <h1 className='font-[Neue] font-medium lg:text-base sm:text-base mix-blend-difference text-white'>BLOG PAGE</h1> */}
        
      </nav>
      
      <section className='flex justify-center'>
       
        {/* Auto-scrolling images */}
        <div className='hidden sm:block relative overflow-hidden max-w-[94rem] mx-auto w-full px-4'>
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, scrollDistance] 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "restart",
                duration: 80, 
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ 
                  transition: { duration: 0.3 }
                }}
              >
                <img 
                  src={imageSrc} 
                  alt={`gallery image ${index + 1}`} 
                  className='h-[90vh] w-[calc(100vw-2rem)] max-w-[1504px] object-cover'
                  style={{ objectPosition: "50% 10%" }} 
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </main>
  )
}

export default Hero
