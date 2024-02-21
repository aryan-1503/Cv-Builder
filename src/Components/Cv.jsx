//Cv.jsx
import  './../styles/Cv.css'
import {useContext} from "react";
import {GeneralContext} from "../App.jsx";



export default function Cv({ educationalInfo,experienceInfo }) {
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
                {experienceInfo.map((exp, index) => (
                    <div key={index} className="exp-content">
                        <div className="company-name">
                            {exp.companyName}
                            <span className="start-end">
                                {exp.startYear}-{exp.endYear}
                            </span>
                            <span className="position">{exp.position}</span>
                            <span className="res">{exp.responsibilities}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}