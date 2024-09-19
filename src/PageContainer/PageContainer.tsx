import Footer from "../comman/footer/Footer";
import Navbar from "../comman/navbar/Navbar";
import Routing from "../routing/Routing";
import { BrowserRouter } from "react-router-dom";

function PageContainer() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routing />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default PageContainer;
