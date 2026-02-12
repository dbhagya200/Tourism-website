import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Loading } from "./view/common/loadingPage/Loading.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { DefaultLayout } from "./view/common/defaultLayout/DefaultLayout";

// ScrollToTop component - defined inside App.tsx but used inside Router
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
};

// Wrap your routes with ScrollToTop
const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/*" element={<DefaultLayout />} />
            </Routes>
        </>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Initialize animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    );
}

export default App;