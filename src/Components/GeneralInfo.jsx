import  './../styles/GeneralInfo.css'
import {useContext} from "react";
import {GeneralContext} from "../App.jsx";
export default function GeneralInfo() {
    const {fullName,phoneNumber,Email,City,handleFullNameChange,handlePhoneNumberChange,handleCityChange,handleEmailChange} = useContext(GeneralContext);
    return (
        <div className="general-container">
            <div className="header-general-info">
                <div>General Information</div>
            </div>
            <form id="Form">
                <label htmlFor="fullName">
                    <input type="text" onChange={handleFullNameChange} placeholder="Full Name" value={fullName}/>
                </label>
                <label htmlFor="phoneNumber">
                    <input type="tel" onChange={handlePhoneNumberChange} placeholder="Phone Number" value={phoneNumber}/>
                </label>
                <label htmlFor="email">
                    <input type="email" onChange={handleEmailChange} placeholder="Email" value={Email}/>
                </label>
                <label htmlFor="city">
                    <input type="text" onChange={handleCityChange} placeholder="City" value={City}/>
                </label>
            </form>
        </div>
    );
}
