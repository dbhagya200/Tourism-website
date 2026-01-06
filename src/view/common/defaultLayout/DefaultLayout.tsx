import { Outlet } from "react-router-dom"; // Import Outlet
import { Navbar } from "../navbar/Navbar.tsx";
import { Footer } from "../footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar/>
            {/* This is where the child route (Home, Packages, etc.) will render */}
            <Outlet/>
            <Footer/>
        </>
    );
}