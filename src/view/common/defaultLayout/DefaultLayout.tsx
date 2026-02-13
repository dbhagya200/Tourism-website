import { Navbar } from "../navbar/Navbar.tsx";
import { Footer } from "../footer/Footer.tsx";
import {Main} from "../main/Main.tsx";
import SideContactBar from "../sideContactBar/SideContactBar.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Main/>
            <Footer />
            <SideContactBar/>
        </>
    );

}