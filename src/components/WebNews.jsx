import '../assets/styles/WebNews.css';


const WebNews = () => {
    return (
        <div className="container webNews">
            <div className="news">
                <div className="newsImg">
                    <img className='desktopImg' src="/images/image-web-3-desktop.jpg" alt="web3-desktop" />
                    <img className='mobileImg' src="/images/image-web-3-mobile.jpg" alt="web3-mobile" />
                </div>
                <div className="newsText">
                    <div className="newsTitle">
                        <h1>
                            The Bright Future of Web 3.0?
                        </h1>
                    </div>

                    <div className="newsPreview">
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                        </p>

                        <button>Read more</button>
                    </div>
                </div>
            </div>

            <div className="new">
                <div className="newTitle">
                    <h1>New</h1>
                </div>

                <div className="newTilesContainer">
                    <div className="newTiles">
                        <h2>
                            Hydrogen VS Electric Cars
                        </h2>
                        <p>
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>

                    <div className="newTiles">
                        <h2>
                            The Downsides of AI Artistry
                        </h2>
                        <p>
                            What are the possible adverse effects of on-demand AI image generation?
                        </p>
                    </div>

                    <div className="newTiles">
                        <h2>
                            Is VC Funding Drying Up?
                        </h2>
                        <p>
                            Private funding by VC firms is down 50% YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebNews;
