import { Navbar } from "../navbar/Navbar.tsx";
import { Footer } from "../footer/Footer.tsx";
import {Main} from "../main/Main.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    );
}