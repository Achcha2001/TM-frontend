import React from "react";
import "./aboutus.css"; // Make sure to import your CSS file with appropriate styling

function Aboutus() {
  return (
    <div className="about-container">
      <div className="abt">
        <div className="background--image">
          <img src="../images/aboutus.jpg" alt="Background" />
          <div className="overlay-text">
            <h1 className="heading-text">Everything About Us...</h1>
          </div>
        </div>
      </div>
      <section className="abt-one">
        <div className="one">
        <h2>Lets get to know about us...</h2>
        <p>
          Minuwangoda Toastmasters Club is a dynamic and vibrant community dedicated to enhancing communication and leadership skills. Since our charter date on May 1, 2017, we have been on a journey of empowerment, providing a supportive platform for individuals to overcome their fear of public speaking, refine their presentation skills, and develop into confident leaders.
        </p>
        </div>
        <h2>Charter Date: May 1, 2017</h2>
<div className="sec">
        <h2>Past Presidents</h2>
        <ul>
        <li>
            <img className="press" src="../images/Athula.png" alt="Athula Gunasekara" />
            <div className="president-details">
            <strong>Athula Gunasekara:</strong>
            <p>As the inaugural president, Athula Gunasekara played a pivotal role in shaping the club's culture and laying the foundation for its success. Under his leadership, Minuwangoda Toastmasters Club embarked on a journey of empowering individuals to become effective communicators and leaders. The club has since become a place where members from diverse backgrounds come together to learn, grow, and support each other in their personal and professional development.</p>
            </div>
          </li>

          <li>
    <img className="press" src="../images/indika.jpg" alt="Indika Rathnayake" />
    <div className="president-details">
    <strong>Indika Rathnayake:</strong>
    <p>
      Indika Rathnayake is a lawyer by profession and served as the president for the term 2019/2020. With a passion for effective communication and leadership, Indika contributed significantly to the growth and success of Minuwangoda Toastmasters Club during her tenure.
    </p>
    </div>
  </li>
          <li>
            <img className="press" src="../images/madushi2.jpg" alt="Madushi Edirisinghe" />
            <div className="president-details">
  <strong>Madushi Edirisinghe:</strong>
  <p>
    Madushi Edirisinghe served as president during the club's early years, contributing to its development and success. In the Toastmasters year 2020/2021, she continued to lead the club with dedication, fostering an environment of growth and learning.
  </p>
</div>

          </li>
          <li>
            <img className="press" src="../images/nipun1.jpg" alt="Nipun Edirisinghe" />
            <div className="president-details">
           
  <strong>Nipun Edirisinghe:</strong>
  <p>
    Nipun Edirisinghe continued the leadership legacy, focusing on initiatives to enhance members' experiences. As the president during the Toastmasters year 2021/2022, he played a pivotal role in guiding the club with innovation and enthusiasm, contributing to the growth and success of Minuwangoda Toastmasters Club.
  </p>
</div>

          </li>
          <li>
            <img src="../images/bishuni2.jpg" alt="Bishuni Gunasinghe" />
            <div className="president-details">
  <strong>Bishuni Gunasinghe:</strong>
  <p>
    Bishuni Gunasinghe, the immediate past president, added their unique touch to the club's leadership, contributing to its diverse and enriching experience. Serving with dedication and innovation, Bishuni played a crucial role in steering Minuwangoda Toastmasters Club through the challenges and successes of the past term.
  </p>
</div>

          </li>
        </ul>
        </div>
        <div className="cur">

        <h2>Current President</h2>
        <ul>
          <li>
            <img src="../images/nimshi2.jpg" alt="Nimshi Palihawadana" />
            <div className="president">
            <strong>Nimshi Palihawadana:</strong>
            <p>Nimshi Palihawadana is the current president, leading the club with enthusiasm and dedication. Nimshi plays a vital role in coordinating club activities, fostering a positive environment, and ensuring the continued growth and success of Minuwangoda Toastmasters Club.</p>
            </div>
          </li>
        </ul>
        <div className="president">
        <p>
          Under the leadership of these presidents, the club has witnessed numerous success stories, with members conquering their fear of public speaking, refining their presentation skills, and developing into confident leaders. The commitment of past and present presidents has left a lasting impact on the club's members and its overall Toastmasters experience.
        </p>

        <p>
          As Minuwangoda Toastmasters Club commemorates its charter date, it celebrates not only its past achievements but also looks forward to a future filled with growth, inspiration, and the continued development of its members. The club remains dedicated to fostering an environment where individuals can transform into effective communicators and leaders, making a positive impact in their personal and professional lives. Congratulations to all past and present presidents for their valuable contributions to the success of Minuwangoda Toastmasters Club!
        </p>
        </div>
        </div>
        {/* Awards Section */}
        <div className="awards-section">
          <h2>Awards</h2>
          <div className="award">
              <img src="../images/all.jpg" alt="Award 3" />
              
            </div>
          <div className="awards-grid">
            <div className="award-item">
              <img src="../images/quality1.jpg" alt="Award 1" />
              <p>Quality Club Award 22/23</p>
            </div>
            <div className="award-item">
              <img src="../images/golden.jpg" alt="Award 2" />
              <p>Golden Club Award 21/22</p>
            </div>
            <div className="award-item">
              <img src="../images/special.jpg" alt="Award 3" />
              <p>Special Membership Award 21/22</p>
            </div>
            <div className="award-item">
              <img src="../images/phnx.jpg" alt="Award 3" />
              <p>Pheonix Award 21/22</p>
            </div>
            
            {/* Add more award items as needed */}
          </div>
        </div>

        {/* Additional Information and Google Map */}
        <div className="additional-info">
          <h2>Visit Us</h2>
          <p>
            We are located at Lion Center, Minuwangoda. Feel free to join us during our meetings and events.
          </p>
          <iframe
            title="Minuwangoda Toastmasters Club Location"
            width="100%"
            height="400"
          
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=Minuwangoda%20Toastmasters%20Club&key=AIzaSyB6V33lcfW83EQy55qOmYhqPA05dau29bc"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
