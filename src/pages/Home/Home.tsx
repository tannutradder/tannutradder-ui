import Banner from "../../component/banner/Banner";
import WhyStepTraders from "../../component/home/WhyStepTrader";
import './Home.css';

function Home() {
    const imgPath = "homePageBanner.jpeg"
    return (
        <>
            <Banner imgPath={imgPath} />
            <WhyStepTraders />
        </>
    );
}

export default Home;
