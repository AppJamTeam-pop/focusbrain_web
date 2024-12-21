import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "src/pages/start";
import Login from "src/pages/auth/login";
import Signup from "src/pages/auth/signup";
import Main from "src/pages/main";
import Focus from "src/pages/focus";
import CalendarPage from "src/pages/calendar";
import CalendarDay from "src/pages/calendarDay";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/calendarDay/*" element={<CalendarDay />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
