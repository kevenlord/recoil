import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} exact/>
                <Route path="/users" element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}