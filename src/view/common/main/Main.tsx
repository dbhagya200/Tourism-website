import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {TravelReels} from "../../pages/travelReels/TravelReels.tsx";
import {Packages} from "../../pages/packages/Packages.tsx";
import {Reviews} from "../../pages/reviews/Reviews.tsx";
import {Gallery} from "../../pages/gallery/Gallery.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";

export function Main() {

    return (
        <main className="bg-slate-900 ">
            <Routes>
                <Route index element={<Home/>} />
                <Route index element={<Main />} />
                <Route path="reels" element={<TravelReels />} />
                <Route path="packages" element={<Packages />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                {/*<Route path="book" element={<Book />} />*/}


            </Routes>

        </main>
    );
}