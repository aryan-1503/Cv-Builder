//Cv.jsx
import  './../styles/Cv.css'
import {useContext} from "react";
import {GeneralContext} from "../App.jsx";



export default function Cv({ educationalInfo }) {
    const {fullName,phoneNumber,Email,City} = useContext(GeneralContext)
    return (
        <div className='cv-container'>
            <div className='header-cv'>
                <div className="Name">{fullName}</div>
                <div className="phoneNumber">📞 {phoneNumber}</div>
                <div className="email">📧 {Email}</div>
                <div className="City">📍 {City}</div>
            </div>
            <div className="Education-info">
                <div className="education-header">
                    Education
                </div>
                {educationalInfo.map((edu, index) => (
                    <div key={index} className="edu-content">
                        <div className="uni-name">
                            {edu.uniName}
                            <span>{edu.course}</span>
                            <span className="start-end">
                                {edu.startYear}-{edu.endYear}
                            </span>
                            <span className="City">{edu.city}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Experience-info">
                <div className="experience-header">
                    Experience
                </div>
                <div className="exp-content">
                    <div className="company-name">
                        Company XYZ
                        <span className="start-end">2021-2025</span>
                        <span className="position">Developer</span>
                        <span className="res">Your responsibility</span>
                    </div>
                </div>
            </div>
        </div>

    )
}