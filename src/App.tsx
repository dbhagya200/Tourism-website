import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your components...
import { DefaultLayout } from "./view/common/defaultLayout/DefaultLayout";
import { Main } from "./view/common/main/Main.tsx"; // Your Hero/Home component
import { TravelReels } from "./view/pages/travelReels/TravelReels";
import { Packages } from "./view/pages/packages/Packages";
import { Reviews } from "./view/pages/reviews/Reviews";
import { Gallery } from "./view/pages/gallery/Gallery";
import { Contact } from "./view/pages/contact/Contact";

function App() {
    // Initialize animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Parent Route: Applies Navbar & Footer to everything inside */}
                <Route path="/" element={<DefaultLayout />}>
                    {/* Index matches path="/" */}
                    <Route index element={<Main />} />
                    <Route path="reels" element={<TravelReels />} />
                    <Route path="packages" element={<Packages />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App