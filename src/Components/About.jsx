import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Components/About.css";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <Navbar />
        <div className="about-container">
          <h1>About Us</h1>
        </div>
        <div className="about-heading-content">
          <p>
            Welcome to <strong>Hk-AniWatch</strong>, your ultimate destination
            for streaming high-quality anime anytime, anywhere!
          </p>
          <p>
            We are passionate anime lovers, just like you, dedicated to bringing
            the best anime series and movies to fans worldwide. Our platform is
            designed to provide a seamless and enjoyable experience, whether
            you're a casual viewer or a hardcore otaku.
          </p>
        </div>
        <div className="about-container">
          <div className="about-sub-container">
            <div className="about-sub-heading">
              <h3>What We Offer:</h3>
            </div>
            <div className="about-sub-container">
              <p>
                <strong>Huge Anime Library – </strong> From classic masterpieces
                to the latest trending series.
              </p>
              <p>
                {" "}
                <strong>High-Quality Streaming – </strong> Enjoy anime in HD
                with smooth playback.
              </p>
              <p>
                <strong>Subbed & Dubbed Versions – </strong> Choose how you want
                to experience your favorite shows.
              </p>
              <p>
                {" "}
                <strong>User-Friendly Interface – </strong>Easy navigation and
                search features for a hassle-free experience.
              </p>
              <p>
                <strong>Regular Updates –</strong> We keep our library fresh
                with new episodes and series.
              </p>
            </div>
          </div>
        </div>
        <div className="about-conclusion">
          <p>
            At Hk-AniWatch, we believe that anime should be accessible to
            everyone. That’s why we strive to create a platform that celebrates
            the art, culture, and storytelling of anime. Whether you're into
            action-packed shonen, heartwarming slice-of-life, or mind-bending
            psychological thrillers, we have something for everyone!
          </p>
          <p>Join our community and dive into the world of anime with us!</p>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
