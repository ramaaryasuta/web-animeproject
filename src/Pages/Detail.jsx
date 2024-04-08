import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { malIdContext } from "../App"

const DetailPage = () => {
    const [animeData, setAnimeData] = useState([])

    const malId = useContext(malIdContext)

    const getDetail = () => {
        try {
            const response = axios.get(`https://api.jikan.moe/v4/anime/${malId.malId}`)
            .then(res => {
                setAnimeData(res.data.data)})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetail();
    }, [])

    console.log(animeData.images)
    // console.log(animeData.images.jpg)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
            <div>
                {/* <img src={animeData ? animeData.images.jpg.image_url : ""   } alt="" /> */}
            </div>
            <div>
                <h1 className="text-2xl font-bold">{animeData.title}</h1>
                <h3>Mal Id: {animeData.mal_id}</h3>
                <p className="text-justify">{animeData.synopsis}</p>
            </div>
        </div>
    )
}

export default DetailPage