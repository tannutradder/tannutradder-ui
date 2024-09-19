import AboutUsComponent from "../../component/aboutUs/AboutUsComponent";

function About() {
    const imgPath = "AboutUsBanner.jpg";
    return (
        <>
            <div className='text-light text-center banner-section position-relative'>
                <img src={imgPath} style={{ height: '700px', width: '100%' }} alt="Banner Image" />
                <div className="position-absolute text-light zIndex-2" style={{ top: "50px", left: "30%", right: "30%", fontSize: "30px" }}>
                    About Us
                </div>
                <div className="position-absolute text-light zIndex-2" style={{ top: "24%", left: "5%", right: "5%", fontSize: "22px" }}>
                    <p style={{color:"#ffde4a"}}>where we empower individuals to navigate the financial markets with confidence and skill.</p>
                    <p style={{color:"#ffde4a"}}>
                        Our mission is to provide top-notch trading education that is accessible to everyone, regardless of experience level.
                    </p>
                </div>
            </div>
            <AboutUsComponent />
        </>
    );
}

export default About;
