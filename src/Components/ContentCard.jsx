import React from "react";
import "./Contentcard.css";

const ContentCard = (props) => {
  let { image, title, rating, totalEpisode } = props;
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={image} alt="{image} Anime Image" className="anime-image" />
        </div>
        <p>
          Anime Name :<span className="anime-name">{title}</span>
        </p>
        <p>
          Rating :<span className="anime-rating">{rating}/10</span>
        </p>
        <p>
          Episodes :<span className="total-episodes">{totalEpisode}</span>
        </p>
      <div class="watch-btn-container">
      <button className="watch-btn">Watch Now</button>
      </div>
      </div>
    </>
  );
};

export default ContentCard;
