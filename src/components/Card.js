import React from "react";

const Card = ({ article }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={article.urlToImage} alt="" />
      </div>
      <div className="card-details">
        <p mode="multi" className="card-title">
          {article.title}
        </p>
        {/* <p mode="multi" className="card-desc">
          {article.description}
        </p> */}
        <span>
          Author: <strong></strong>
          {article.author ? article.author : "Anonymous"}
        </span>
        <br />
        <span>Source: </span>
        <a href={article.url} target="blank">
          {article.source.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
