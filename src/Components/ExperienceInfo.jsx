// Experience-Info.jsx
import React, { useState } from "react";
import "./../styles/ExperienceInfo.css";
import { DropDown } from "./EducationalInfo.jsx";

export default function ExperienceInfo({ onExperienceInfoChange }) {
    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleResponsibilitiesChange = (e) => {
        setResponsibilities(e.target.value);
    };

    const handleStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    const handleEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    const handleAddClick = () => {
        const experienceInfo = {
            companyName,
            position,
            responsibilities,
            startYear,
            endYear,
        };
        onExperienceInfoChange(experienceInfo);
        setCompanyName("");
        setPosition("");
        setResponsibilities("");
        setStartYear("");
        setEndYear("");
    };
    return (
        <div className="exp-container">
            <div className="header-exp-info">
                <div>Experience</div>
            </div>
            <form id="exp-Form" action="#">
                <label htmlFor="CompanyName">
                    <input type="text" value={companyName} onChange={handleCompanyNameChange} placeholder="Company Name" />
                </label>
                <label htmlFor="Position">
                    <input type="text" value={position} onChange={handlePositionChange} placeholder="Position" />
                </label>
                <label htmlFor="Responsibilities">
                    <input type="text" value={responsibilities} onChange={handleResponsibilitiesChange} placeholder="Responsibilities" />
                </label>
                <div className="serving-time">
                    <label htmlFor="StartYear">
                        Period From:
                        <DropDown selectedValue={startYear} onChange={handleStartYearChange} />
                    </label>
                    <label htmlFor="EndDate">
                        To:
                        <DropDown selectedValue={endYear} onChange={handleEndYearChange} />
                    </label>
                </div>
                <label>
                    <button type="button" onClick={handleAddClick}>
                        Add
                    </button>
                </label>
            </form>
        </div>
    );
}
