import  './../styles/Cv.css'
import {useContext} from "react";
import {GeneralContext} from "../App.jsx";

function EducationCard({uniName,start,end,uniCity}){
    return (
        <div className="uni-name">
            {uniName}
            <span className="start-end">{start}-{end}</span>
            <span className="City">{uniCity}</span>
        </div>
    )
}

export default function Cv() {
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
                <div className="edu-content">
                    <EducationCard uniName='Pandit Deendayal Energy University' start='2021' end='2025' uniCity='Gandhinagar'/>
                </div>
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