import { React} from "react";
import Slider from "react-slick";
import "./TimeAndPlaces.css"
const TimeAndPlaces = () => {
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
            <h1 className="heading">Time and Places</h1>
            <Slider {...settings} style={{ overflow: 'hidden' }}>
                <div className="timeplaces-card card">



                    <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}> Ayodhya Ram Mandir Opening and Closing Time</h2>


                    <div className="images">
                        <div className="img"><img
                            src="https://www.savaari.com/blog/wp-content/uploads/2023/10/Shri_Ram_Janmabhoomi_Teerth_Kshetra_Trust1.webp"
                            alt="Ayodhya Mandir" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Ayodhya Ram Mandir Timing</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Morning Hours: 07:00 am - 11:00 am</p>
                            <p>Evening Hours: 02:00 pm - 06:00 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Morning Hours: 07:00 am - 11:00 am</p>
                            <p>Evening Hours: 02:00 pm - 06:00 pm</p>
                        </div>
                    </div>
                </div>


                <div className="timeplaces-card card">
                    
                        <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}>Kanak Bhavan Opening and Closing Time</h2>
                    
                    <div className="images">
                        <div className="img"><img src="https://d3k1i85mml78tf.cloudfront.net/Blogs/1679591872118_post_image_1.jpg"
                            alt="Kanak Bhavan" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Kanak Bhavan Timings</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Morning Hours: 08:00 am - 11:30 am</p>
                            <p>Evening Hours: 07:00 pm - 09:30 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Morning Hours: 08:30 am - 12:00 am</p>
                            <p>Evening Hours: 06:30 pm - 09:00 pm</p>
                        </div>
                    </div>
                </div>




                <div className="timeplaces-card card">


                    <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}>Tulsi Smarak Bhavan Opening and Closing Time</h2>


                    <div className="images">
                        <div className="img"><img src="https://ayodhyadhaam.com/wp-content/uploads/2019/01/tulsi-780x262.jpg"
                            alt="Tulsi Smarak Bhavan" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Tulsi Smarak Bhavan Timings</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Opening Hours: 10:00 am - 09:00 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Opening Hours: 10:00 am - 09:00 pm</p>
                        </div>
                    </div>
                </div>




                <div className="timeplaces-card card">

                    <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}>Nageshwaranath Temple Opening and Closing Time</h2>


                    <div className="images">
                        <div className="img"><img src="https://d3k1i85mml78tf.cloudfront.net/Blogs/1677092708383_post_image_1.jpg"
                            alt="Nageshwaranath Temple" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Nageshwaranath Temple Timings</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Opening Hours: 05:00 am - 08:00 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Opening Hours: 05:00 am - 08:00 pm</p>
                        </div>
                    </div>
                </div>




                <div className="timeplaces-card card">

                    <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}>Nageshwaranath Temple Aarti Time</h2>


                    <div className="images">
                        <div className="img"><img
                            src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1232431477_20200227131537.jpg"
                            alt="Nageshwaranath Temple Aarti" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Nageshwaranath Temple Aarti Timings</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Morning Hours: 05:00 am -06:00 am</p>
                            <p>Evening Hours: 08:00 pm - 08:30 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Morning Hours: 05:00 am - 06:00 am</p>
                            <p>Evening Hours: 08:00 pm - 08:30 pm</p>
                        </div>
                    </div>
                </div>




                <div className="timeplaces-card card" style={{ lineHeight: '-100px' }}>

                    <h2 style={{ color: 'brown', fontFamily: 'Montserrat, sans-serif', fontSize: '22px', padding: '30px 0' }}>Hanumangarhi Temple Opening and Closing Time</h2>


                    <div className="images">
                        <div className="img"><img
                            src="https://rishikeshdaytour.com/blog/wp-content/uploads/2023/07/Hanuman-Garhi-Ayodhya.jpg"
                            alt="Hanumangarhi Temple" /></div>
                        <div className="content">
                            <p style={{ marginTop: '15px' }}><b>Hanumangarhi Temple Timings</b></p>
                            <p><u>Summer Timings:</u></p>
                            <p>Morning Hours: 07:30 am -11:30 am</p>
                            <p>Evening Hours: 04:30 pm - 09:30 pm</p>
                            <p><u>Winter Timings:</u></p>
                            <p>Morning Hours: 09:00 am - 11:00 am</p>
                            <p>Evening Hours: 04:00 pm - 09:00 pm</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default TimeAndPlaces;