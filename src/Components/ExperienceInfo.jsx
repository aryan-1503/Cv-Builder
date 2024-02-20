// Experience-Info.jsx
import React, { useState } from "react";
import "./../styles/ExperienceInfo.css";
import { DropDown } from "./EducationalInfo.jsx";

export default function ExperienceInfo() {

    return (
        <div className="exp-container">
            <div className="header-exp-info">
                <div>Experience</div>
            </div>
            <form id="exp-Form" action="#">
                <label htmlFor="CompanyName">
                    <input type="text" placeholder="Company Name" />
                </label>
                <label htmlFor="Position">
                    <input type="text" placeholder="Position" />
                </label>
                <label htmlFor="Responsibilities">
                    <input type="text" placeholder="Responsibilities" />
                </label>
                <div className="serving-time">
                    <label htmlFor="StartYear">
                        Period From:
                        <DropDown />
                    </label>
                    <label htmlFor="EndDate">
                        To:
                        <DropDown />
                    </label>
                </div>
                <label>
                    <button type="button">
                        Add
                    </button>
                </label>
            </form>
        </div>
    );
}
