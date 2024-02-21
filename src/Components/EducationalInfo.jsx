// Educational-Info.jsx
import React, {createContext, createRef, useContext, useEffect, useState} from "react";
import "./../styles/EducationalInfo.css";


export function DropDown({onChange,selectedValue}) {
    const thisYear = new Date().getFullYear();
    var years = [];

    for (let i = thisYear - 5; i <= thisYear + 5; i++) {
        years.push(i);
    }

    return (
        <select onChange={onChange} value={selectedValue}>
            {years.map((year) => {
                return <option key={year}>{year}</option>;
            })}
        </select>
    );
}

export default function EducationalInfo({ onEducationalInfoChange }) {
    const [uniName, setUniName] = useState("");
    const [course, setCourse] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [city, setCity] = useState("");

    const handleUniNameChange = (e) => {
        setUniName(e.target.value);
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };

    const handleStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    const handleEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleAddClick = () => {
        const educationalInfo = {
            uniName,
            course,
            startYear,
            endYear,
            city,
        };
        onEducationalInfoChange(educationalInfo);
        setUniName("");
        setCourse("");
        setStartYear("");
        setEndYear("");
        setCity("");
    };

    return (
        <div className="education-container">
            <div className="header-educational-info">
                <div>Educational Information</div>
            </div>
            <form id="edu-Form" action="#">
                <label htmlFor="UniName">
                    <input type="text" onChange={handleUniNameChange} placeholder="School or University name" required/>
                </label>
                <label htmlFor="Course">
                    <input type="text" onChange={handleCourseChange} placeholder="Course"/>
                </label>
                <div className="years">
                    <label htmlFor="StartYear">
                        Start:
                        <DropDown onChange={handleStartYearChange} selectedValue={startYear}/>
                    </label>
                    <label htmlFor="EndDate">
                        End:
                        <DropDown onChange={handleEndYearChange} selectedValue={endYear}/>
                    </label>
                </div>
                <label htmlFor="City">
                    <input type="text" onChange={handleCityChange} placeholder="University City" />
                </label>
                <label>
                    <button type="button" onClick={handleAddClick}>
                        Add
                    </button>
                </label>
            </form>
        </div>
    );
}
