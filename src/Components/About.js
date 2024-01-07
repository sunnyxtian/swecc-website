import React from "react";
import "../CSS/About.css";
import teamMembers from "../Data/teamMembers.json";
import pastOfficers from "../Data/pastOfficers.json";
import ProfileCard from "./profileCard";

const About = () => {
  return (
    <div>
      <div>
        <div className="about-message-section">
          <div className="about-title">About Us</div>
          <div className="about-text">Learn the ways that SWECC can help you get started in Software Engineering!</div>
        </div>
        <div>
          <h1 className="team-members-title">Board Members</h1>
          <p className="team-members-subtitle">2023-2024</p>
          <ProfileCard info={teamMembers} />
        </div>
        <div>
          <h1 className="team-members-title">Board Members</h1>
          <p className="team-members-subtitle">2022-2023</p>
          <ProfileCard info={pastOfficers} />
        </div>
      </div>
    </div>
  );
};

export default About;
