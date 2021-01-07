import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Grid from "./components/Grid";
import Loading from "./components/Loading";
import Error from "./components/Error";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function App() {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState("ar");
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const {
          data: { articles, totalResults },
        } = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=${country}&q=${query}&category=${category}&pageSize=100`,
          {
            headers: {
              authorization: API_KEY,
            },
          }
        );
        setData(articles);
        setTotalResults(totalResults);
        //
        //
      } catch (e) {
        setError(e);
        //
      } finally {
        setLoading(false);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, [category, query, country]);
  return (
    <>
      <Navbar
        category={category}
        country={country}
        setCountry={setCountry}
        getQuery={setQuery}
        setCategory={setCategory}
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Grid data={data} totalResults={totalResults} />
      )}
    </>
  );
}

export default App;
