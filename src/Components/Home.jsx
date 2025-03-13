import React from "react";
import ContentCard from "./ContentCard";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import irregular from "../assets/images/Irregular.jpg";
import Angel from "../assets/images/Angel.jpg";
import AngelBeats from "../assets/images/AngelBeats.jpg";
import Aot from "../assets/images/AOT.jpg";
import ASignOfAffection from "../assets/images/ASignOfAffection.jpg";
import Berserk from "../assets/images/Berserk.jpg";
import ClassRoomOfElite from "../assets/images/ClassRoomOfElite'.jpg";
import DateALive from "../assets/images/DateALive.jpg";
import DeathNote from "../assets/images/DeathNote.jpg";
import DemonSlayer from "../assets/images/DemonSlayer.jpg";
import Devil from "../assets/images/Devil_Is_a_Part-Timer!.jpg";
import Dororo from "../assets/images/Dororo.jpg";
import FromMeToYou from "../assets/images/FromMeToYou.jpg";
import FruitBasket from "../assets/images/Fruit Basket.jpg";
import Gintama from "../assets/images/Gintama.jpg";
import GurrenLangann from "../assets/images/GurrenLangann.jpg";
import Haikyu from "../assets/images/Haikyu!!.jpg";
import Horimiya from "../assets/images/Horimiya.jpg";
import JujutsuKaisan from "../assets/images/JujutsuKaisan.jpg";
import MyDressUpDarling from "../assets/images/MyDressUpDarling.jpg";
import Naruto from "../assets/images/Naruto.jpg";
import Onepiece from "../assets/images/Onepiece.jpg";
import OPM from "../assets/images/OPM.jpg";
import DemonSchool from "../assets/images/WelcomeToDemonSchoolIruma-kun.jpg";
import YourLieInApril from "../assets/images/YourLieInApril.jpg";

const Home = () => {
  return (
    <>
      <main className="home-page">
      <Navbar />
        <div className="search-box-container">
          <input
            type="search"
            name="search"
            placeholder="Search Your Favourite Anime"
            className="search-box"
          />
          <button className="search-btn">
            <FaSearch size={20} />
          </button>
        </div>
        <div className="cards">
          <div className="popular">
            <h2 className="secondary-heading">Popular Animes</h2>
          </div>
          <ContentCard
            image={Onepiece}
            title={"Onepiece"}
            rating={9.0}
            totalEpisode={1137}
          />
          <ContentCard
            image={Naruto}
            title={"Naruto"}
            rating={8.4}
            totalEpisode={220}
          />
          <ContentCard
            image={JujutsuKaisan}
            title={"JujutsuKaisan"}
            rating={8.5}
            totalEpisode={48}
          />
          <ContentCard
            image={DeathNote}
            title={"DeathNote"}
            rating={8.9}
            totalEpisode={37}
          />
          <ContentCard
            image={Aot}
            title={"Attack on Titen"}
            rating={9.1}
            totalEpisode={98}
          />
          <ContentCard
            image={DemonSlayer}
            title={"Demon Slayer"}
            rating={8.6}
            totalEpisode={69}
          />
          <ContentCard
            image={OPM}
            title={"One Punch Man"}
            rating={7.9}
            totalEpisode={48}
          />
          <ContentCard
            image={ClassRoomOfElite}
            title={"ClassRoom Of Elite"}
            rating={8.6}
            totalEpisode={39}
          />
          <ContentCard
            image={Devil}
            title={"Devil is a Part-Timer"}
            rating={7.9}
            totalEpisode={13}
          />
          <ContentCard
            image={Haikyu}
            title={"Haikyu"}
            rating={8.2}
            totalEpisode={68}
          />
          <ContentCard
            image={Angel}
            title={"Angel Next Door Spoils Me Rotten "}
            rating={8.1}
            totalEpisode={12}
          />
          <ContentCard
            image={irregular}
            title={"irregular at Magic School"}
            rating={7.4}
            totalEpisode={32}
          />
          <ContentCard
            image={Berserk}
            title={"Berserk"}
            rating={8.6}
            totalEpisode={28}
          />
          <ContentCard
            image={AngelBeats}
            title={"AngelBeats"}
            rating={7.9}
            totalEpisode={24}
          />
          <ContentCard
            image={DemonSchool}
            title={"Welcome to Demon School iruma-kun"}
            rating={7.8}
            totalEpisode={24}
          />
          <ContentCard
            image={Dororo}
            title={"Dororo"}
            rating={7.5}
            totalEpisode={13}
          />
          <ContentCard
            image={YourLieInApril}
            title={"Your Lie in April"}
            rating={8.4}
            totalEpisode={13}
          />
          <ContentCard
            image={DateALive}
            title={"Date A Live"}
            rating={7.8}
            totalEpisode={24}
          />
          <ContentCard
            image={MyDressUpDarling}
            title={"My DressUp Darling"}
            rating={7.4}
            totalEpisode={12}
          />
          <ContentCard
            image={Horimiya}
            title={"Horimiya"}
            rating={8.4}
            totalEpisode={32}
          />
          <ContentCard
            image={ASignOfAffection}
            title={"ASign of Affection"}
            rating={8.4}
            totalEpisode={12}
          />
          <ContentCard
            image={FromMeToYou}
            title={"From Me To You"}
            rating={8.2}
            totalEpisode={12}
          />
          <ContentCard
            image={Gintama}
            title={"Gintama"}
            rating={8.4}
            totalEpisode={326}
          />
          <ContentCard
            image={FruitBasket}
            title={"Fruit Basket"}
            rating={8.4}
            totalEpisode={12}
          />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
