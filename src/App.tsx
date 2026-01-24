import {useEffect, useState} from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
import {Loading} from "./view/common/loadingPage/Loading.tsx";
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
    const [isLoading, setIsLoading] = useState(true);
    // Initialize animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        // Simulate loading time (or replace with real data fetching)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Loads for 2 seconds
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

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