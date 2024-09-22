import Footer from "../comman/footer/Footer";
import Navbar from "../comman/navbar/Navbar";
import Routing from "../routing/Routing";
import { HashRouter as Router } from "react-router-dom";

function PageContainer() {
    return (
        <>
            <Router>
                <Navbar />
                <Routing />
                <Footer />
            </Router>
        </>
    );
}

export default PageContainer;
