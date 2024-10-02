import Home from "../pages/Home/Home";
import About from "../pages/aboutUs/About";

import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import Course from "../pages/course/Course";
import NotFound from "../pages/not-found/NotFound";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" index element={
                    <>
                        <Home />
                        <About />
                        <Contact />
                        <Course />
                    </>
                } />
                {/* <Route path="about" element={<About />} />
                <Route path="contact-us" element={<Contact />} /> */}
                {/* <Route path="service" element={<Service />} /> */}
                {/* <Route path="course" element={<Course />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Routing;
