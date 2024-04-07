import axios from "axios"
import { useEffect, useState } from "react"

const DetailPage = (props) => {
    const [data, setData] = useState([])

    const getDetail = () => {
        try {
            const response = axios.get(`https://api.jikan.moe/v4/anime/${props.mal_id}`)
            .then(res => setData(res.data.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <div>
            <h1>Detail {data.title}</h1>
        </div>
    )
}

export default DetailPage