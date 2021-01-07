import React, { useState, useRef } from "react";

const Navbar = ({ category, setCategory, getQuery, country, setCountry }) => {
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

  const categories = ["General", "Health", "Science", "Technology"];

  const countries = [
    { name: "Argentina", code: "AR" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Belgium", code: "BE" },
    { name: "Brazil", code: "BR" },
    { name: "Bulgaria", code: "BG" },
    { name: "Canada", code: "CA" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Cuba", code: "CU" },
    { name: "Czechia", code: "CZ" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Greece", code: "GR" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "India", code: "IN" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Korea ", code: "KR" },
    { name: "Latvia", code: "LV" },
    { name: "Lithuania", code: "LT" },
    { name: "Malaysia", code: "MY" },
    { name: "Mexico", code: "MX" },
    { name: "Morocco", code: "MA" },
    { name: "Netherlands ", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nigeria", code: "NG" },
    { name: "Norway", code: "NO" },
    { name: "Philippines ", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Romania", code: "RO" },
    { name: "Russia ", code: "RU" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Serbia", code: "RS" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "South Africa", code: "ZA" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Taiwan", code: "TW" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "Ukraine", code: "UA" },
    { name: "USA", code: "US" },
    { name: "Venezuela", code: "VE" },
  ];
  return (
    <nav className="header">
      <h1 id="" onClick={handleClick} className="header-logo">
        NewsApp
      </h1>
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
        <div className="category-selector">
          <span>Category: </span>
          {console.log("Category:" + category)}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="categories"
            id="category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="country-selector">
          <span>Country: </span>
          <select
            className="country-selector"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            name="countries"
            id="country"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
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
