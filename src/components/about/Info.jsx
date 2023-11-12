import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="uil uil-award-alt"></i>
        <h3 className="about_title">Place and Date of Birth</h3>
        <span className="about_subtitle">Medan, 29 July 2004</span>
      </div>

      <div className="about_box">
        <i class="uil uil-briefcase-alt"></i>
        <h3 className="about_title">Address</h3>
        <span className="about_subtitle">107, Tuamang street, Medan</span>
      </div>

      <div className="about_box">
        <i class="uil uil-book-open"></i>
        <h3 className="about_title">Hoby</h3>
        <span className="about_subtitle">Reading & Cooking</span>
      </div>
    </div>
  );
};

export default Info;
