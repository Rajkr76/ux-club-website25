"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./footer";
import UpcomingEvent from "./upcomingEvent";
import AfterEvent from "./AfterEvent";
import Video from "./videoPart";
import HorizontalGallery from "./HorizontalGallery";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Nav sits outside the animated wrapper so it stays fixed */}
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content Wrapper - Slides down when menu opens */}
      <motion.div
        className="relative bg-[#0e0e0e]"
        animate={{
          y: isMenuOpen ? "60vh" : 0
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1]
        }}
      >
        {/* Header Section */}
        <div className="min-h-fit pb-4 sm:pb-0 w-full bg-[#0e0e0e] relative text-[#eceae5] pt-3 font-[Neue]">
          <div>
            <h1 className="font-[Socilo] lg:text-[20vw] lg:pl-5 xl:text-[20vw] sm:text-[19vw] md:text-[19vw] pl-2 text-[19vw] leading-none tracking-wide lg:pt-24 sm:pt-17 md:pt-15 pt-10 text-center ">
              UXClub
            </h1>
          </div>
        </div>

        <UpcomingEvent />
        <AfterEvent />
        <Video />
        
        {/* Your New Horizontal Slider Component */}
        <HorizontalGallery />

        {/* Footer */}
        <div className="lg:min-h-[60vh] min-h-[40vh] sm:min-h-[60vh] md:min-h-[60vh] w-full bg-black text-[#eceae5] pt-3 font-[Neue]">
          <Footer />
        </div>
      </motion.div>
    </>
  );
}