import { useEffect } from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { DefaultLayout } from "./view/common/defaultLayout/DefaultLayout";
import {Navbar} from "./view/common/navbar/Navbar.tsx";
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [pathname]);

    return null;
}

function App() {
    // Initialize animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <HashRouter>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path="/*" element={<DefaultLayout />}>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App