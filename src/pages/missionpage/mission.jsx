import React from "react";
import "../missionpage/mission.css"
import { Slide } from 'react-slideshow-image';

const images = [
    {
        url: 'https://fiskrocketteamdotcom.files.wordpress.com/2021/10/unnamed-1.jpg',
        caption: 'Slide 1'
    },
    {
        url: 'https://fiskrocketteamdotcom.files.wordpress.com/2021/10/img_3733-2-1.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://fiskrocketteamdotcom.files.wordpress.com/2021/10/img_3730-1.jpg',
        caption: 'Slide 3'
    },
]


const Missionpage = () => (
    <div>
        <div className="our-mission">
            OUR MISSION
        </div>
        <div className="mission-content">
            <div>
                <img className="rocket-img" src="https://fiskrocketteamdotcom.files.wordpress.com/2021/10/rocket-final-1.gif"></img>
            </div>
            <div className="mission-statement">
                FAAMT will use its support to expand its reach into the community by mentoring more middle and high school students in the aforementioned STEM fields.  FAAMT will establish rocketry and robotics science clubs in several metro public schools with the aim of establishing an annual competition between these schools.  This is meant to create academic rivalries that will boost achievement and motivation for urban and at-risk students of color alike.
                <br></br>
                <br />
                FAAMT is committed to the upward mobility of its students and the urban youth of Nashville.
            </div>
            <div className="our-purpose">
                OUR PURPOSE
            </div>
            <div className="list">
                <ul>
                    <li>To compete in the Student Launch Program hosted by NASA</li>
                    <li>To impact the community through outreach</li>
                    <li>To provide a pipeline for minority students into Aerospace Industry and Science Education</li>
                </ul>
            </div>
            <div className="slide-container">
                <Example></Example>
            </div>
        </div>
    </div>
)

export default Missionpage;


const Example = () => {
    

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};
