import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavBar from "./components/MyNavBar";

const App = () => {
    return (
        <BrowserRouter>
            <MyNavBar />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
