// home.css
/* Add your CSS styles here for the Home component */

// Home.js
import React, { useEffect, useState } from "react";
import "./home.css";
import Footer from "./footer"; // Import the Footer component

function Home() {
  const [words, setWords] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "../images/back4.jpg",
    "../images/unfold1.jpg",
  ];

  const paragraph = '  Welcome To Minuwangoda  Toastmasters Club...';

  useEffect(() => {
    const wordsArray = paragraph.split('');
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < wordsArray.length) {
        setWords((prevWords) => [...prevWords, wordsArray[currentIndex]]);
        currentIndex++;
      } else if (currentIndex === wordsArray.length) {
        wordsArray.length = 0;
        currentIndex = 0;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [images]);

  return (
    <div className="container1">
      <div className="container">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow Image"
          className="background-image"
        />
        <div className="text-container">
          <h1>{words}</h1>
          <div className="navbar-Joinus">
            <a href="/contactus" className="navbar-joinus-link">
              <button className="navbar-joinus-button">Join Us</button>
            </a>
          </div>
        </div>
      </div>
      <section className="one">
        <p className="para">
          <h1 className="h1">Become a <span className="tm">Toastmaster</span></h1>
          Becoming a toastmaster is a journey of self-improvement and public speaking excellence. It's an opportunity to enhance your communication skills, build self-confidence, and become a more effective leader. As a toastmaster, you'll participate in regular meetings, where you'll practice impromptu speaking, deliver prepared speeches, and receive constructive feedback from fellow members. These experiences will help you overcome stage fright, refine your storytelling abilities, and connect with diverse audiences. Join us at Minuwangoda Toastmasters Club, and let's embark on this empowering journey together!
        </p>
        <img src="../images/become.jpg" alt="Become" />
      </section>
      <section className="two">
        <img src="../images/mission.jpg" alt="Mission" />
        <p className="para2">
          <h1 className="h2"><span>Club Mission</span></h1>
          <div className="mission">
            We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth.
          </div>
        </p>
      </section>
     
      <section className="three">
        <h1 className="heading-meet">MEET OUR <span className="exco">EXCO 23/24</span></h1>
        <div className="exco-grid">
          {/* First row */}
          <div className="exco-item">
            <img src="../images/nimshi2.jpg" alt="Exco 1" className="exco-image" />
            <p className="position">PRESIDENT</p>
            <p className="exco-name">TM Nimshi Palihawadana</p>
          </div>

          {/* Second row */}
          <div className="exco-item">
            <img src="../images/bishuni2.jpg" alt="Exco 2" className="exco-image" />
            <p className="position">VP EDUCATION</p>
            <p className="exco-name">TM Bishuni Gunasinghe</p>
          </div>
          <div className="exco-item">
            <img src="../images/me.ed1.png" alt="Exco 3" className="exco-image"/>
            <p className="position">VP PUBLIC RELATIONS</p>
            <p className="exco-name">TM Achira Weerasuriya</p>
          </div>
          <div className="exco-item">
            <img src="../images/SAMAN2.jpg" alt="Exco 4" className="exco-image" />
            <p className="position">VP MEMBERSHIP</p>
            <p className="exco-name">TM Saman Weerasuriya</p>
          </div>

          {/* Third row */}
          <div className="exco-item">
            <img src="../images/madushi2.jpg" alt="Exco 5"  className="exco-image" />
            <p className="position">SECRETARY</p>
            <p className="exco-name">TM Madushi Edirisinghe</p>
          </div>
          <div className="exco-item">
            <img src="../images/indika.jpg" alt="Exco 6" className="exco-image" />
            <p className="position">TREASURER</p>
            <p className="exco-name">TM Indika Rathnayake</p>
          </div>
          <div className="exco-item">
            <img src="../images/janaka2.14.jpg" alt="Exco 7" className="exco-image" />
            <p className="position">SGT AT ARMS</p>
            <p className="exco-name">TM Janaka Malawiarachchi</p>
          </div>
        </div>
      </section>
      
    
      <Footer />
    </div>
  );
}

export default Home;
