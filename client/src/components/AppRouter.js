import React from 'react';
import { Route, Routes } from "react-router-dom";  // Должно быть react-router-dom
import { publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";

    const AppRouter = observer(() => {
        return (
            <Routes>
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        );
    });

    export default AppRouter;
