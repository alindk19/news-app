import React from "react";

const Pagination = ({ articlesPerPage, setCurrentPage, totalResults }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResults / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-footer">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <p className="page-link" onClick={() => setCurrentPage(number)}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
