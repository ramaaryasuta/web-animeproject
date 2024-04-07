import axios from "axios"
import { useState, useEffect } from "react"
import GridComp from "../Components/Gridcomp"

const MangaPage = () => {
    const [dataManga, setDataManga] = useState([])

    const getTopManga = () => {
        try {
            const response = axios.get('https://api.jikan.moe/v4/top/manga').then(
                res => setDataManga(res.data.data)
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTopManga();
    }, [])

    return (
        <div>
            <h1 className="text-xl font-bold mt-5 ml-5">Top Manga</h1>
            <GridComp data={dataManga} />
        </div>
    )
}

export default MangaPage