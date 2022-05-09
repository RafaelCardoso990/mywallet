import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
 
import SignIn from "./components/Sign-in";
import SignUp from "./components/Sing-up";
import Records from "./components/Record";
import Entry from "./components/Entrys";
import Exit from "./components/Exits";

import UserContext from "./assets/context/UserContext";


function App(){
    const [token, setToken] = useState(null)
    const [emailUser, setEmailUser] = useState(null)
    
    return(
        <UserContext.Provider value={{token, setToken, emailUser, setEmailUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/records' element={<Records />} />
                    <Route path='/entry' element={<Entry />} />
                    <Route path='/exit' element={<Exit />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;