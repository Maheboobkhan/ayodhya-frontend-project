import { React} from "react";
import Slider from "react-slick";
import "./NewsSection.css"





const NewsSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="news-section">
                <div className="title">
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif', marginLeft: '20px', marginTop: '60px', color: 'orangered' }}>News Section</h1>

                </div>
                <div className="cards">
                    <Slider {...settings} style={{ overflow: 'hidden' }}>
                        <div className="card">
                            <div className="image-section">
                                <img src="rammandir.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h4>Title One</h4><br />
                                <ul>
                                    <li>
                                        <p>
                                            Darshan Timings has been revised due to unexpected crowd in the temple.</p>
                                    </li><br />
                                    <li>
                                        <p> Now People travelling from different stated have
                                            an edge in the timings of ayodhya ram mandir darshan.

                                        </p>
                                    </li>
                                </ul>
                                <button className="join-btn">Learn More</button>
                            </div>

                        </div>
                        <div className="card">
                            <div className="image-section">
                                <img src="rammandir.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h4>Gold Crown of Ram:</h4><br />
                                <ul>
                                    <li>
                                        <p>
                                            The decoration that has happend in the temple is made up of gold.
                                        </p>
                                    </li><br />
                                    <li>
                                        <p> The temple is made up of different chemicals so the age is almost of 1000 years.
                                        </p>
                                    </li>
                                </ul>
                                <button className="join-btn">Learn More</button>
                            </div>

                        </div>
                        <div className="card">
                            <div className="image-section">
                                <img src="rammandir.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h4>Hundi Collections:</h4><br />
                                <ul>
                                    <li>
                                        <p>
                                            Hundi was completely full in half day of first day darshan in ayodhya</p>
                                    </li><br />
                                    <li>
                                        <p> It was one of the most fastest hundi that was completely full in ayodhya ram mandir

                                        </p>
                                    </li>
                                </ul>
                                <button className="join-btn">Learn More</button>
                            </div>

                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default NewsSection;