import { useEffect } from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your components...
import { DefaultLayout } from "./view/common/defaultLayout/DefaultLayout";
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // This forces the browser to jump to the top (0, 0)
        // whenever the URL path changes.
        window.scrollTo(0, 0);
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
            <Routes>
                {/* Parent Route: Applies Navbar & Footer to everything inside */}
                <Route path="/*" element={<DefaultLayout />}>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App