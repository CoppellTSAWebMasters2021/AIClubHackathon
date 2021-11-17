import React from "react";
//import Wave from "react-wavify";
import './css/Home.css'
import Typewriter from 'typewriter-effect';
import Card from './Card'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="container">
            <div className="section1">
                <div className="title-text">
                    <div className="title-text-1">
                    </div>
                    <h1>Virtual Artifical Intelligence Hackathon 2021</h1>
                    <h3>
                        <div className="tw-1">
                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter.typeString('Coppell High School').start();



                                }}

                            />
                        </div>
                    </h3>
                </div>
                {/* <div className="Wave">
                    
                    <Wave fill='rgb(255, 255, 255)'
                        paused={false}
                        options={{
                            height: 1,
                            amplitude: 20,
                            speed: 0.15,
                            points: 3
                        }}
                    />
                </div> */}



            </div>

            <div className="section2">
                <div className="section2-title-text">
                    <h1>A Hackathon For Everyone!</h1>
                </div>
                <div className="section2-text">

                    <h3>Coppellisd's AI Hackathon Club is a 24-hour event where students from all over the world come together to create and innovate. The event is open to all students, regardless of their background or experience. We are looking for creative and innovative ideas to help us build the next generation of artificial intelligence.</h3>

                </div>


            </div>
            <div className="section3">
                <div className="section3-title-text">
                    <h1>Why is it Virtual?</h1>
                </div>
                <div className="section3-text">

                    <h3>Due to the global pandemic, in-person events have not been held as in the past.  Instead of canceling or postponing events, many organizers chose to hold them virtually.  These virtual events had to be interactive and provide participants similar experiences as in-person events.</h3>

                </div>


            </div>


        </div>



    );
}

export default Home;