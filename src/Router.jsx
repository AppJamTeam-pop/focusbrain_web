import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/pages/"
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={<Main/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
