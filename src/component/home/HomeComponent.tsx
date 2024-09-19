function HomeComponent() {
    return (<>
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to Forex Trading</h1>
                <p className="lead">Your gateway to successful forex trading.</p>
                <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/random/300x200?finance" alt="Forex Trading" className="img-fluid" />
                    <h3>What is Forex Trading?</h3>
                    <p>Forex trading involves buying and selling currencies to make a profit. Learn the basics and advanced strategies to excel in forex trading.</p>
                </div>
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/random/300x200?market" alt="Market Analysis" className="img-fluid" />
                    <h3>Market Analysis</h3>
                    <p>Understand market trends and analysis to make informed trading decisions. Stay ahead of the market with our expert analysis.</p>
                </div>
                <div className="col-md-4">
                    <img src="https://source.unsplash.com/random/300x200?trading" alt="Trading Tools" className="img-fluid" />
                    <h3>Trading Tools</h3>
                    <p>Utilize the best trading tools and platforms to enhance your trading experience. Get access to real-time data and automated trading tools.</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default HomeComponent;
