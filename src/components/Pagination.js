import React from "react";

const Pagination = ({ articlesPerPage, setCurrentPage, totalResults }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResults / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#" onClick={() => setCurrentPage(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
