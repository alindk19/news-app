import React, { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Grid = ({ data, totalResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstPage = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstPage, indexOfLastArticle);
  return (
    <>
      <section className="grid">
        {currentArticles &&
          currentArticles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
      </section>
      <Pagination
        totalResults={totalResults}
        articlesPerPage={articlesPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Grid;
