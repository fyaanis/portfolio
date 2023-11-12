import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title"> Education </h2>
      <span className="section__subtitle">My education journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Undergraduate Program
                </h3>
                <span className="qualification_subtitle">Indonesia University of Education</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Senior Highschool</h3>
                <span className="qualification_subtitle">
                  SMA Harapan 1 Medan
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Junior High School
                </h3>
                <span className="qualification_subtitle">SMP Harapan 2 Medan</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Primary School</h3>
                <span className="qualification_subtitle">SD Islam Al-Ulum Terpadu Medan</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2010 - 2016
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
