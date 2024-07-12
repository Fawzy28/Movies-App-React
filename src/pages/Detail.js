import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from '../api/Instance'
//import MovieCard from "./MovieCard"
export default function () {

    const [movieData, setMovieData] = useState([])
    const params = useParams()
    useEffect(() => {
        axiosInstance.get(`/${params.id}`)
            .then((resp) => { setMovieData(resp.data) })
            .catch((error) => { console.log(error) })
    }, [])
    console.log(movieData)

    return (

        <div className="card text-bg-dark">
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} className="card-img" style={{opacity:'0.3'}} />
            <div className="card mx-5 " style={{ height: '250px', width: '200px', position:'absolute' , top:'150px'}}>
                <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top" alt="..." />
                
                <div className="card-body" style={{display:'inline',backgroundColor:'grey 0.2', position:'absolute', height:'300px' ,width:'500px' ,left:'300px' }}>
                    <h3 style={{color:'white'}} className="card-title">{movieData.title}</h3>
                    <p style={{color:'white'}} className="card-text">{movieData.overview}</p>
                    <p style={{color:'white'}} className="card-text"><small style={{color:'red'}} className="text-body-secondary"></small></p>
                </div>
            </div>
            <div className="card-img-overlay">
                <h5 className="card-title">{movieData.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p style={{color:'white'}} className="card-text"><small>{movieData.release_date}</small></p>
            </div>
        </div>


    )

}