import './App.css'
import Header from './Components/Header'
import GeneralInfo from "./Components/GeneralInfo.jsx";
import EducationalInfo from "./Components/EducationalInfo.jsx";
import ExperienceInfo from "./Components/ExperienceInfo.jsx";
import Cv from "./Components/Cv.jsx";
import {createContext, useState} from "react";

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

export const EducationContext = createContext({
    UniName: '',
    Course: '',
    Start: '',
    End: '',
    UniCity: '',
    handleEducationSubmit: () => {},
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
                    <EducationalInfo />
                </div>
                <div>
                    <ExperienceInfo />
                </div>
            </div>
            <div className="cv-container">
                <GeneralContext.Provider value={{fullName,phoneNumber,Email,City,handleFullNameChange ,handlePhoneNumberChange ,handleEmailChange ,handleCityChange}}>
                    <Cv />
                </GeneralContext.Provider>
            </div>
        </div>
    </>
  )
}

export default App
