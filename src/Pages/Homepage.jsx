import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GridComp from "../Components/Gridcomp"

const HomePage = () => {
const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = () => {
    try {
      const response = axios
        .get("https://api.jikan.moe/v4/top/anime")
        .then((res) => setTopAnime(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopAnime();
  }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mt-5 ml-5">Top Anime</h1>
            <GridComp data={topAnime}/>
        </div>
    )
}

export default HomePage