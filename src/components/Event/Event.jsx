import { React} from "react";
import Slider from "react-slick";
import './Event.css'



const Event = () => {
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
        <div className="card-main-container">
            <h1 className="heading">Upcoming Events</h1>
            <Slider {...settings} style={{ overflow: 'hidden' }}>
                <div className="card">
                    <div className="card-container">
                        <h1>Next Event</h1>
                        <h2>Hanuman Jayanti</h2>
                        <div className="Aarti-time">
                            <div className="Aarti">
                                <h1>26</h1>
                                <h3>March'24</h3>
                            </div>
                            <div className="time">
                                <p className="para1"> Maha Aaarti Time 07:00p.m.</p>
                                <p>Celebrate the festival of lights with joy and enthusiasm,Diwali symbolizes the victory of light over darkness and good over evil."</p>
                                <h4>Ayodhya,Uttar Pradesh-224123</h4>
                            </div>
                        </div>
                        <button className="join-btn">join now</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-container">
                        <h1>Next Event</h1>
                        <h2>Ram Navami</h2>
                        <div className="Aarti-time">
                            <div className="Aarti">
                                <h1>17</h1>
                                <h3>april'24</h3>
                            </div>
                            <div className="time">
                                <p className="para1">Procession Timings 11:00a.m.-:01:43p.m.</p>
                                <p>Celebrate the festival of lights with joy and enthusiasm,Diwali symbolizes the victory of light over darkness and good over evil."</p>
                                <h4>Ayodhya,Uttar Pradesh-224123</h4>
                            </div>
                        </div>
                        <button className="join-btn">join now</button>
                    </div>
                </div>





                <div className="card">
                    <div className="card-container">
                        <h1>Next Event</h1>
                        <h2>Ayodhya Art And Culture Fair</h2>
                        <div className="Aarti-time">
                            <div className="Aarti">
                                <h1>20</h1>
                                <h3>july'24</h3>
                            </div>
                            <div className="time">
                                <p className="para1">start time-10:00a.m.,end time-06:00p.m.</p>
                                <p>Celebrate the festival of lights with joy and enthusiasm,Diwali symbolizes the victory of light over darkness and good over evil."</p>
                                <h4>Ayodhya,Uttar Pradesh-224123</h4>
                            </div>
                        </div>
                        <button className="join-btn">join now</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-container">
                        <h1>Next Event</h1>
                        <h2>Diwali Festival</h2>
                        <div className="Aarti-time">
                            <div className="Aarti">
                                <h1>29'oct-3'nov</h1>
                                <h3>2024</h3>
                            </div>
                            <div className="time">
                                <p className="para1">start time- 06:00p.m.</p>
                                <p>Celebrate the festival of lights with joy and enthusiasm,Diwali symbolizes the victory of light over darkness and good over evil."</p>
                                <h4>Ayodhya,Uttar Pradesh-224123</h4>
                            </div>
                        </div>
                        <button className="join-btn">join now</button>
                    </div>
                </div>

            </Slider>
        </div >
    );
}

export default Event;