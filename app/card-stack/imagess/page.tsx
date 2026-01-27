'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const items = [
  // Core Team
  { name: "Tanishk", team: "Core Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Sujal", team: "Core Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Sonakshi", team: "Core Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Rishit Aggarwal", team: "Core Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Harsh Gupta", team: "Core Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },

  // Event Management (Leads)
  { name: "Yash Verma", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Atherva Sahai", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },

  // Event Management (Members)
  { name: "Manas Saraf", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Abhimayu Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Atharv Srivastava", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Shivam Waghule", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Koushani Banerjee", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Sonakshi Dashore", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Ipsita Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Shivani Chaudhary", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Sarva Shresth Saini", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Niharika Sharma", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Naini Nautiyal", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Yug Wankhede", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Kimaya Holkar", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Pradumn Mathur", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Lakshy Jain", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Shivangi Agnihotri", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Shivansh Prashant", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Atharva Dhanraj Naik", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Yaana Rajput", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Bhagyesh Amol Yeole", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Aditi Verma", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Tushti Agarwal", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Yash Kumar Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Sneha Tamrakar", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Diya Sambharia", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Manvi Modi", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Divyansh Singh", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Akhil Joshi", team: "Event Management", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Hariom Patidar", team: "Event Management", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Lakshya Mangla", team: "Event Management", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "M K Nandhini", team: "Event Management", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },

  // Technical Team
  { name: "Yeshu Agarwal", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Jhalak Sahgal", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Raj Kumar", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Srija Panda", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Mausam Kar", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Abhishek Tripathi", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Devansh Bansal", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Tarni Jain", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Deepti Singh", team: "Technical Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Varun Kushwah", team: "Technical Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Aniket Kumar", team: "Technical Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },

  //content team 
    // Content Team
  { name: "Harsh Mahesh Math", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Pranjali Sharma", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Arya Sankar Ram TS", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Arpith Sharma", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Abhinav Jha", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Arpita", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Pranesha Dev", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Bellappagari Monisha", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Ayushmaan Joshi", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Pragya Kochar", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Shraddha Gupta", team: "Content Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Soham S Malvankar", team: "Content Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Anubhav Ranjan", team: "Content Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Riddhiraj Roy", team: "Content Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },

  // PR Team
    // PR Team
  { name: "Mansi", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Prateek", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Mahi Sharma", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Ekansh Sukla", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Atharva Chourey", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Manyata Sharma", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Nityansh Dixit", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Sara Manocha", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Kritika Maurya", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Rashmi Priya", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Keshav Maheshwari", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Tarun Sengar", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Shreyansh Nandan Shukla", team: "PR Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Shruti Gangwar", team: "PR Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Akshara Shah", team: "PR Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Debadrita Mukhopadhyay", team: "PR Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },

  // Design Team
    // Design Team
  { name: "Nitin", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Archisha Nigam", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Dhruv Thakwani", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Anvesha Shrivastav", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Mitaali Singh", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Sharvil Kulkarni", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Aaryan Kumar Verma", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Sakshi Dhananjay Bhosale", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Pranav Padmakar Kale", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Shaurya Gupta", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Nishkarsh Shrivastava", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Aayush", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Ananya Vajpayee", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Anush Karanapu", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Pranjal Tiwari", team: "Design Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Lavanya Pandit", team: "Design Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Pradeepti Srivastava", team: "Design Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Ashika Maheshwari", team: "Design Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },

  // social media team
  { name: "Veera", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Shivansh", team: "Social Media Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Shreyansh Sachan", team: "Social Media Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
  { name: "Kunal Rajput", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2016/11/26/23/45/dog-1861839_960_720.jpg" },
  { name: "Tuhin Rakshit", team: "Social Media Team", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" },
  { name: "Shagun Singh", team: "Social Media Team", img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { name: "Pola Eekshana", team: "Social Media Team", img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }

];

export default function ImagessPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (hoveredIdx !== null && hoveredIdx !== idx) {
      setIsTransitioning(true);
      setTimeout(() => {
        setHoveredIdx(idx);
        setIsTransitioning(false);
      }, 150);
    } else {
      setHoveredIdx(idx);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setIsTransitioning(false);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-12 relative overflow-hidden"
      style={{ background: '#eceae5' }}
    >
      <h1 className="text-2xl font-bold mb-8">Members</h1>
      
      {hoveredIdx !== null && (
        <div
          className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 80,
            transform: 'translate(0, 0)',
          }}
          id="hover-image"
        >
          <div className="relative">
            <img
              src={items[hoveredIdx].img}
              alt={items[hoveredIdx].name}
              className="w-72 h-72 object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                background: '#fff',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
              }}
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-2sm font-medium whitespace-nowrap">
              {items[hoveredIdx].name}
            </div>
          </div>
        </div>
      )}

      <div className="w-full z-10">
        {items.map((item, idx) => (
          <Link href="/card-stack/students">
          <div
            key={idx}
            className="w-full flex items-center justify-between px-3 py-3 transition-all duration-500 ease-out cursor-pointer group"
            style={{ background: idx % 2 === 0 ? '#eceae5' : '#dddad1' }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="font-mono text-gray-700 transition-all duration-500 ease-out group-hover:text-white">
              {String(idx + 1).padStart(3, '0')}
            </span>
            <span className='lg:block hidden font-mono mx-[15rem] flex-1 text-left  font-semibold text-gray-700 transition-all duration-500 ease-out group-hover:text-white'>{item.team}</span>
            
            <span className="mx-4 font-semibold transition-all duration-500 ease-out group-hover:text-white">
              {item.name}
            </span>
            
            {/* <div className="w-6 h-6 rounded-full bg-gray-300 transition-all duration-500 ease-out group-hover:bg-white opacity-60 group-hover:opacity-100"></div> */}
          </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #hover-image {
            left: 50% !important;
            top: 45% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
        .group:hover {
          background: #000 !important;
          transform: translateX(8px);
        }
        
        .group {
          border-left: 3px solid transparent;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .group:hover {
          border-left-color: #fff;
        }
      `}</style>
    </div>
  );
}