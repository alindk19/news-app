import React, { useState, useRef } from "react";

const Navbar = ({ setCategory, getQuery }) => {
  const [query, setQuery] = useState("");
  const input = useRef("");
  const handleChange = () => {
    setQuery(input.current.value);
    getQuery(query);
    setCategory("");
  };
  const handleClick = (e) => {
    // console.log(e);
    setCategory(e.target.id);
  };
  return (
    <nav className="header">
      <h2 id="" onClick={handleClick} className="header-logo">
        NewsApp
      </h2>
      <ul className="header-news-category">
        <li onClick={handleClick} id="sports">
          Sports
        </li>
        <li onClick={handleClick} id="business">
          Business
        </li>
        <li onClick={handleClick} id="entertainment">
          Entertainment
        </li>
      </ul>
      <input
        type="text"
        value={query}
        ref={input}
        onChange={handleChange}
        placeholder="Search for topic"
        className="searchBox"
      />
    </nav>
  );
};

export default Navbar;
