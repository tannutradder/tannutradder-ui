function AboutUsComponent() {
    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <h3 className="mt-3 text-center text-primary">What We Offer</h3>
                    <div className="col-md-6">
                        <div style={{ height: "80%", width: "80%" }}>
                            <img className="img img-fluid" src="aboutUsS1.jpeg" alt="What we offer" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="py-4 px-2">
                            <p> At Tanu Trader, we offer a range of services designed to meet the needs of traders at all stages of their journey:</p>
                            <p><strong>Comprehensive Courses:</strong>   From beginner to advanced, our courses cover everything from the basics of trading to sophisticated strategies.</p>
                            <p><strong>Interactive Webinars:</strong> Join our live sessions where experts discuss market trends and answer your questions in real time.</p>
                            <p><strong>Personalized Mentorship:</strong> Receive one-on-one guidance from experienced traders to refine your skills and strategies.</p>
                            <p><strong>Trading Tools:</strong> Access to exclusive tools and resources to enhance your trading experience.</p>
                        </div>
                    </div>
                </div>

                <div className="row py-4 my-2" style={{ backgroundColor: "#dbffdcad" }}>
                    <h3 className="text-center my-3">Your Guide to Success</h3>
                    <div className="col-md-7 p-3">
                        <p>My self <strong>Tanisha patidar</strong>, I do crypto currency, stock and forex but my expertise is in forex market.
                            Me as a Forex trader will provide you best and understandable content to make you a profitable trader.</p>
                        <p>Tanu trader will provide you the knowledge of how market moves and which trade to take in the market at same time  keeping in mind about risk management, loss per trade and how much percentage this trade is perfect...
                        </p>
                        <p>
                            Tanu Trader will support you in your every dilemma related to Trade. Tanu Trader will provide you best course for forex Trading.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="d-flex justify-content-center" style={{ height: "400px" }}>
                            <img className="img img-fluid rounded" src="tannuImg.jpg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Who We Are</h5>
                                <p>Founded by industry experts, Tanu Trader is committed to fostering a community of informed and successful traders.</p>
                                <p>We believe that with the right knowledge and tools, anyone can achieve their trading goals. </p>
                                <p>Our team comprises seasoned professionals who bring a wealth of experience in trading, finance, and education.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Our Philosophy</h5>
                                <p>
                                    We are driven by a passion for education and a commitment to helping our clients succeed. Our approach is based on practical learning, real-world application, and continuous support. We aim to create a supportive environment where traders can learn, grow, and achieve their financial goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row py-5">
                    <div className="card" style={{ backgroundColor: "#3ba88a" }}>
                        <div className="card-body text-center">
                            <h3>JOIN US</h3>
                            <p className="fs-5">Whether you are a novice looking to get started or an experienced trader aiming to enhance your skills, <strong>Tanu Trader</strong> is here to support your journey. Explore our offerings, join our community, and take the first step towards trading success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AboutUsComponent;