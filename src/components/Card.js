import React from "react";

const Card = ({ article }) => {
  return (
    <div className="card">
      <img src={article.urlToImage} alt="article" />
      <div className="card-details">
        <p mode="multi" className="card-title">
          {article.title}
        </p>
        {/* <p mode="multi" className="card-desc">
          {article.description}
        </p> */}
        <span className="author">
          Author: <strong></strong>
          {article.author ? article.author : "Anonymous"}
        </span>
        <span className="source">
          Source:
          <a href={article.url} target="blank">
            {article.source.name}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
