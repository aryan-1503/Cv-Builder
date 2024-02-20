// Educational-Info.jsx
import React, { useState } from "react";
import "./../styles/EducationalInfo.css";

export function DropDown() {
    const thisYear = new Date().getFullYear();
    var years = [];

    for (let i = thisYear - 5; i <= thisYear + 5; i++) {
        years.push(i);
    }

    return (
        <select>
            {years.map((year) => {
                return <option key={year}>{year}</option>;
            })}
        </select>
    );
}

export default function EducationalInfo() {

    return (
        <div className="education-container">
            <div className="header-educational-info">
                <div>Educational Information</div>
            </div>
            <form id="edu-Form" action="#">
                <label htmlFor="UniName">
                    <input type="text" placeholder="School or University name" />
                </label>
                <label htmlFor="Course">
                    <input type="text" placeholder="Course"/>
                </label>
                <div className="years">
                    <label htmlFor="StartYear">
                        Start:
                        <DropDown />
                    </label>
                    <label htmlFor="EndDate">
                        End:
                        <DropDown />
                    </label>
                </div>
                <label htmlFor="City">
                    <input type="text" placeholder="University City" />
                </label>
                <label>
                    <button type="button">
                        Add
                    </button>
                </label>
            </form>
        </div>
    );
}
