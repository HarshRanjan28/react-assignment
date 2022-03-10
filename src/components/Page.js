import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [fetchData, setFetchData] = useState(null)
  useEffect(async () => {
    await axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setFetchData(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(fetchData === null) {
    return <h1>Loading....</h1>
  }
  return(
    <div>
      {fetchData.map(item => {
        return(
          <img key={item._id} src={item.poster} />
        )
      })}
    </div>
  )
  
};

export default Page;
