import React from "react";
import "../accomplishment-page/accomplishment.css"

const Accomplishmentpage = () => (
  <>
    <div className="accomplishments">
      Accomplishments
    </div>
    <div className="highlights">
      <div className="header">
        HIGHLIGHTS
      </div>
      <div className="list">
        <ul>
          <li>First Established Rocket Program at an HCBU</li>
          <li>FAAMT member Leah Randle becomes first African American female to receive her Level I and Level II rocket certification from the National Association of Rocketry (NAR).</li>
          <li>Fisk placed 4th out of 8 schools in first year of competition beating Alabama A & M, Auburn University and Mississippi State University (Fisk has no Engineering program nor Aerospace as does the other schools in the competition).</li>
          <li>FAAMT becoming pipeline for students to enter internships and possible employment at NASA and NASA contractors.</li>
          <li>FAAMT outreach program impacting over 4000 students through outreach over past 5 years.</li>
          <li>Ultimate goal – to be first HBCU to launch object into outer space.</li>
        </ul>
      </div>
    </div>
    <div className="picture-cards">
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/unnamed-2.jpg" alt="" />
      </div>
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/img_3731.jpg" alt="" />
      </div>
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/unnamed-4-1.jpg" alt="" />
      </div>
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/unnamed-3-1.jpg" alt="" />
      </div>
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/img_3734.jpg" alt="" />
      </div>
      <div className="card">
        <img className="img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/unnamed-5.jpg" alt="" />
      </div>
    </div>
    <div className="footer">
      <div className="future">
        <div className="title">
          Future for F.A.M.M.T
        </div>
        <div className="divider"></div>
        <div className="future-text">
          Fisk will expand its outreach to the community.
        </div>
        <div className="future-text">
          Develop pipeline for students into Fisk – UAH dual degree program.
        </div>
        <div className="future-text">
          Win NASA SLI competition.
        </div>
        <div className="future-text">
          Be first HBCU to launch an object in space (65 Miles).
        </div>
        <div className="divider"></div>
      </div>
    </div>
  </>
);

export default Accomplishmentpage;
