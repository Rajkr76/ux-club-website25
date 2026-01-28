'use client';

import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const leaders = [
  {
    name: "Tanishq",
    role: "President",
    description: "Leading the club with creativity and vision.",
    image: "avatar.jpg",
    physical: "Height: 5'9\" Build: Confident",
    availability: "Full-time",
    origin: "India",
    skills: ["Leadership", "Strategic Thinking"],
    weight: "70kg",
  },
  {
    name: "Shruti",
    role: "Vice President",
    description: "Coordinating all UX-related activities.",
    image: "image12.jpg",
    physical: "Height: 5'6\" Build: Creative",
    availability: "Part-time",
    origin: "India",
    skills: ["UX Design", "Research"],
    weight: "58kg",
  },
  {
    name: "Rahul",
    role: "Secretary",
    description: "Managing events and internal communication.",
    image: "coverImage.jpg",
    physical: "Height: 6'0\" Build: Energetic",
    availability: "Freelance",
    origin: "India",
    skills: ["Communication", "Event Management"],
    weight: "75kg",
  },
  {
    name: "Dr. Neela",
    role: "Faculty Coordinator",
    description: "Guiding students in every technical step.",
    image: "image13.png",
    physical: "Height: 5'4\" Build: Supportive",
    availability: "Advisory",
    origin: "India",
    skills: ["Mentorship", "Technical Guidance"],
    weight: "65kg",
  },
];

export default function LeaderSlider() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % leaders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  const fadeVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.4 } },
  };

  const badassVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 80 },
    },
    exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.5 } },
  };

  const leader = leaders[current];

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-white font-sans p-4 overflow-x-hidden">
      <h1 className="text-5xl font-bold text-center mb-12">LEADERS</h1>

      {/* Scrolling Images */}
      <div className="w-full overflow-hidden mb-10">
        <motion.div className="flex gap-6 w-max" animate={controls}>
          {[...leaders, ...leaders].map((leader, index) => (
            <motion.img
              key={index}
              src={leader.image}
              alt={leader.name}
              className="w-[70vw] max-w-none h-[70vh] object-cover rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated Details */}
      <div className="w-full bg-[#0e0e0e] px-4 md:px-12 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={badassVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex justify-between items-start flex-wrap">
              <h1 className="text-5xl font-bold">{leader.name}</h1>
              <h2 className="text-5xl font-bold">{leader.role}</h2>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400 text-sm">{current + 1}/{leaders.length}</span>
              <span className="text-2xl font-semibold">Scroll</span>
            </div>

            <hr className="border-gray-600 my-4" />

            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-400">(About_Leader)</p>
              <p className="text-sm text-cyan-200">( CLUB )</p>
            </div>

            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 md:col-span-7">
                <h3 className="text-4xl font-extrabold leading-snug">
                  {leader.description}
                </h3>
              </div>

              <div className="col-span-12 md:col-span-5 flex flex-col justify-between items-end text-right">
                <span className="text-3xl font-bold text-gray-400">{leader.role}</span>
                <motion.div
                  className="w-24 h-24 border border-white mt-8 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6v6m0-6L10 20" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Personal Traits Section */}
            <motion.div
              className="min-h-screen text-white font-mono p-8 flex flex-col md:flex-row gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-full md:w-2/3 space-y-8">
                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(NAME)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.name}</p>
                </div>

                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(PHYSICAL ATTRIBUTES)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.physical}</p>
                </div>

                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(AVAILABILITY)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.availability}</p>
                </div>

                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(PLACE OF ORIGIN)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.origin}</p>
                </div>

                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(SKILLS)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.skills[0]}</p>
                  <p className="text-2xl font-medium text-gray-600 mt-1">{leader.skills[1]}</p>
                </div>

                <div className="border-t border-white pt-4">
                  <p className="text-sm tracking-wide">(WEIGHT)</p>
                  <p className="text-3xl font-semibold mt-2">{leader.weight}</p>
                </div>
              </div>

              <motion.div
                className="w-full md:w-1/3 space-y-8"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-neutral-100 text-black px-6 py-4">
                  <p className="text-sm tracking-widest font-semibold">SKILL</p>
                  <p className="text-xl font-semibold text-right mt-2">{leader.skills[0]} ▾</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="w-full border border-white text-sm tracking-widest py-4 transition"
                >
                  CONNECT WITH PERSON
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}