import Footer from "../comman/footer/Footer";
import Navbar from "../comman/navbar/Navbar";
import Home from "../pages/Home/Home";
import Routing from "../routing/Routing";
import { HashRouter as Router } from "react-router-dom";

function PageContainer() {
    return (
        <>
            <Router>
                <div className="position-relative">
                    <div className="position-fixed top-0 w-100" style={{ zIndex: 999 }}>
                        <Navbar />
                    </div>
                    <div style={{ paddingTop: '60px' }}>
                        <Routing />
                    </div>
                    <Footer />
                </div>

            </Router>
        </>
    );
}

export default PageContainer;
