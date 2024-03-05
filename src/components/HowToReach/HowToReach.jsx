import { React } from "react";
import Slider from "react-slick";
import "./HowToReach.css";

    
const HowToReach = () => {
    var settings = {
        
        dots: true,
        infinite: true,
        speed: 400,
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
        <div class="container">
            <div class="travel-section">
                <div class="title">
                    <h2 className="heading" style={{fontSize:'35px'}}>Travel section</h2>
                    <p style={{color:'orangered',fontSize:'18px', fontFamily:'Montserrat, sans-serif', font:'bold', marginLeft:'20px'}}>Welcome to travel section</p>
                </div>
                <div class="cards">
                <Slider {...settings} style={{ overflow: 'hidden' }}>
                    <div class="howtoreach card">
                        <div class="image-section">
                            <img src="train-1.jpg" alt="img" />
                        </div>
                        <div class="content">
                            <h4>By Train:</h4>
                            <p style={{paddingBottom: '10px'}}>Ayodhya has its own railway station called Ayodhya Junction. You can check the train schedules and book tickets to Ayodhya Junction. Major cities like Lucknow and Varanasi are well-connected to Ayodhya by train.</p>
                            <button className="join-btn" style={{marginBottom: '20px'}}>Read More</button>
                        </div>
                        <div class="posted-date">
                            <p style={{paddingTop: '60px'}}>Posted on 31st</p>
                        </div>
                    </div>
                    <div class="howtoreach card">
                        <div class="image-section">
                            <img src="train-2.jpg" alt="img" />
                        </div>
                        <div class="content">
                            <h4>By Road:</h4>
                            <p style={{paddingBottom: '10px'}}>You can reach Ayodhya by road through buses, taxis, or your private vehicle. The city is well-connected by roads. Lucknow, the capital of Uttar Pradesh, is the nearest major city.</p>
                            <button className="join-btn" style={{marginBottom: '20px'}}>Read More</button>
                        </div>
                        <div class="posted-date">
                            <p style={{paddingTop: '60px'}}>Posted on 31st</p>
                        </div>
                    </div>
                    <div class="howtoreach card">
                        <div class="image-section">
                            <img src="road-2.jpg" alt="img" />
                        </div>
                        <div class="content">
                            <h4>By Air:</h4>
                            <p style={{paddingBottom: '10px'}}>The nearest airport to Ayodhya is the Faizabad Airport.
                                However, it's a small airport, and you may find more flight options at the Chaudhary Charan Singh International Airport (LKO) in Lucknow, which is approximately 140 kilometers away.
                                From there, you can hire a taxi or use public transportation to reach Ayodhya.</p>
                            <button className="join-btn" style={{marginBottom: '20px'}}>Read More</button>
                        </div>
                        <div class="posted-date" style={{paddingTop: '60px'}}>
                            <p>Posted on 31st</p>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HowToReach;