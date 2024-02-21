//App.jsx
import './App.css'
import Header from './Components/Header'
import GeneralInfo from "./Components/GeneralInfo.jsx";
import EducationalInfo from "./Components/EducationalInfo.jsx";
import ExperienceInfo from "./Components/ExperienceInfo.jsx";
import Cv from "./Components/Cv.jsx";
import {createContext, createRef, useRef, useState} from "react";


export const GeneralContext = createContext({
    fullName: '',
    phoneNumber: '',
    Email: '',
    City: '',
    handleFullNameChange: () => {},
    handlePhoneNumberChange: () => {},
    handleEmailChange: () => {},
    handleCityChange: () => {},
})


function App() {
    const [fullName,setFullName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [Email,setEmail] = useState('');
    const [City,setCity] = useState('');
    function handleFullNameChange(e){
        setFullName(e.target.value);
    }
    function handlePhoneNumberChange(e){
        setPhoneNumber(e.target.value);
    }
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handleCityChange(e){
        setCity(e.target.value);
    }

    const [educationalInfo, setEducationalInfo] = useState([]);
    const handleEducationalInfoChange = (info) => {
        setEducationalInfo([...educationalInfo, info]);
    };

    const [experienceInfo, setExperienceInfo] = useState([]);
    const handleExperienceInfoChange = (info) => {
        setExperienceInfo([...educationalInfo, info]);
    };


  return (
    <>
        <div className="header">
           <Header />
        </div>
        <div className="main-container">
            <div className="info-container">
                <div>
                    <GeneralContext.Provider value={{fullName, phoneNumber ,Email ,City,handleFullNameChange ,handlePhoneNumberChange ,handleEmailChange ,handleCityChange}}>
                        <GeneralInfo />
                    </GeneralContext.Provider>

                </div>
                <div>
                    <EducationalInfo onEducationalInfoChange={handleEducationalInfoChange}/>
                </div>
                <div>
                    <ExperienceInfo />
                </div>
            </div>
            <div className="cv-container">
                <GeneralContext.Provider value={{fullName,phoneNumber,Email,City,handleFullNameChange ,handlePhoneNumberChange ,handleEmailChange ,handleCityChange}}>
                    <Cv educationalInfo={educationalInfo}/>
                </GeneralContext.Provider>
            </div>
        </div>
    </>
  )
}

export default App
