import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignUp from "./components/Sing-up";
import Records from "./components/Record";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/records' element={<Records />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;