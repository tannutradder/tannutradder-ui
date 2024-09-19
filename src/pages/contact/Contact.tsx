import Banner from "../../component/banner/Banner";
import ContactForm from "../../component/contactUs/ContactForm";
import './Contact.css';

function Contact() {
    const imgPath = "contactUsBanner.jpeg";
    return (
        <>
            {/* <Banner imgPath={imgPath} /> */}
            <div className='text-light text-center banner-section position-relative'>
                <img src={imgPath} style={{ height: '700px', width: '100%' }} alt="Banner Image" />
                <div className="position-absolute text-light zIndex-2" style={{ top: "50px", left: "30%", right: "30%", fontSize: "30px" }}>
                    Contact Us
                </div>
                <div className="position-absolute text-light zIndex-2 contactBannerRight">
                    <p style={{ color: "#e8ffda" }}>Reach out to us via email <span className="text-primary">tpfxbesttrading@gmail.com</span>  with any questions or inquiries. We’re excited to answer your questions and arrange a meeting with you.
                    </p>
                </div>
            </div >
            <ContactForm />
        </>
    );
}

export default Contact;
