import React, { useEffect, useRef } from "react";
import "./TeamPage.css";
import { Link } from "react-router-dom";

import techImg from "../assets/image.jpg";
import prImg from "../assets/image.jpg";
import contentImg from "../assets/image.jpg";
import designImg from "../assets/image.jpg";
import eventImg from "../assets/image.jpg";
import socialImg from "../assets/image.jpg";

const teams = [
  { name: "Tech Team", image: techImg, link: "/tech-team" },
  { name: "PR Team", image: prImg, link: "/pr-team" },
  { name: "Content Team", image: contentImg, link: "/content-team" },
  { name: "Design Team", image: designImg, link: "/design-team" },
  { name: "Event Team", image: eventImg, link: "/event-team" },
  { name: "Social Media Team", image: socialImg, link: "/social-media-team" },
];

const TeamPage = () => {
  const percentRef = useRef(null); // For the "00%" span
  const titleBarRef = useRef(null); // For the ".team-title" div
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
          <span className="header-start">MEET THE TEAM</span>
          <span ref={percentRef} className="scroll-percent">
            00%
          </span>
          <span className="header-end">MENU ●</span>
        </div>

      
        <div className="team-title " ref={titleBarRef}>
          <h1>THE TEAM</h1>
          <div className="counter">0_6</div>
        </div>

        <div className="view-controls">
          <span>
            IMG/<span className="faded">TXT</span>
          </span>
        </div>
      </div>

  

        <div className="team-grid">
          {teams.map((team, index) => (
            <Link to={team.link} key={index} className="team-card">
              <h4 className="team-name">{team.name}</h4>
              <div className="placeholder">
                <img src={team.image} alt={team.name} className="team-image" />
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default TeamPage;