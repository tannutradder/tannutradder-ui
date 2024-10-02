import Banner from "../../component/banner/Banner";
import WhyStepTraders from "../../component/home/WhyStepTrader";
import './Home.css';

function Home() {
    const imgPath = "homePageBanner.jpeg"
    return (
        <>
            <div id="home">
                <Banner imgPath={imgPath} />
                <WhyStepTraders />
            </div>
        </>
    );
}

export default Home;
