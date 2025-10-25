import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Test from "../pages/Test"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter