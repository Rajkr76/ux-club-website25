"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../components/features/team/components/TeamPage.css";

import teamImg from "../../components/features/team/assets/image.jpg";

const teams = [
  { name: "Tech Team", image: teamImg, link: "/team/tech" },
  { name: "PR Team", image: teamImg, link: "/team/pr" },
  { name: "Content Team", image: teamImg, link: "/team/content" },
  { name: "Design Team", image: teamImg, link: "/team/design" },
  { name: "Event Team", image: teamImg, link: "/team/event" },
  { name: "Social Media Team", image: teamImg, link: "/team/social" },
];

const TeamPage = () => {
  const percentRef = useRef(null);
  const titleBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent =
        docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

      if (percentRef.current) {
        percentRef.current.textContent = `${scrollPercent
          .toString()
          .padStart(2, "0")}%`;
      }

      if (titleBarRef.current) {
        if (scrollTop > 60) {
          titleBarRef.current.classList.add("shrink");
        } else {
          titleBarRef.current.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="team-container">
      <div className="top-box">
        <div className="header">
          <span className="header-start font-[Neue] text-base">MEET THE TEAM</span>
          <span ref={percentRef} className="scroll-percent font-[Neue] text-base">
            00%
          </span>
          <span className="header-end font-[Neue] text-base">MENU ●</span>
        </div>

        <div className="team-title  font-[Neue]" ref={titleBarRef}>
          <h1>THE TEAM</h1>
          <div className="counter font-[Neue]">0_6</div>
        </div>

        <div className="view-controls  ">
          <span>
            TEAM/
            <Link href="/card-stack/imagess">
            <span className="faded font-[Neue]">MEMBERS</span>
            </Link>
          </span>
        </div>
      </div>

      <div className="team-grid">
        {teams.map((team, index) => (
          <Link href={team.link} key={index} className="team-card">
            <h4 className="team-name">{team.name}</h4>
            <div className="placeholder" style={{ position: 'relative' }}>
              <Image src={team.image} alt={team.name} className="team-image" fill sizes="(max-width: 800px) 50vw, 30vw" style={{ objectFit: 'cover' }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
