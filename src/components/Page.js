import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [fetchData, setFetchData] = useState(null);
  useEffect(async () => {
    await axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setFetchData(response.data.result);
        console.log(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (fetchData === null) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="container">
      {fetchData.map((item) => {
        return (
          <div className="movie-poster">
            <img key={item._id} src={item.poster} />;
            <div className="movie-info">
              <h2>{item.title}</h2>
              <h3>Genre: {item.genre}</h3>
              <h3>Director: {item.director}</h3>
              <h3 className="starring">Starring: {item.stars}</h3>
              <button className="btn1">Watch Trailer</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
