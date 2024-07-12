import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import MovieCard from "../components/MovieCard"            //importing the component
import { Navigate, useNavigate } from "react-router-dom"
import axiosInstance from '../api/Instance'
import { useSelector } from "react-redux"

export default function () {

    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        axiosInstance.get('/popular')
            .then((resp) => { setMoviesData(resp.data.results) })
            .catch((error) => { console.log(error) })
    }, [])

    //console.log(moviesData)

    const Navigate = useNavigate()
    const [searchData, setSearchData] = useState('')       //for search//

    let con = true
    const changeDisplayedData = () => {
       const displayedMovies =  moviesData.filter((movie) => {return movie.title.includes(searchData) }) ; 
       //console.log(displayedMovies)
        if (displayedMovies==[]){Navigate('/notfound')} 
        else  {setMoviesData(displayedMovies)} 
                                      }
    

    return (
        <>
            <div className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onInput={(e) => { setSearchData(e.target.value) }} />
                <button className="btn btn-outline-success" onClick={changeDisplayedData}   >Search</button>
            </div>

            <div className="container text-center">
                <div className="row row-cols-4"></div>

                {moviesData.map((movieCardData) => { return (<div style={{ display: "inline-block", height: '400px' }} className="col">  <MovieCard yourdata={movieCardData} />  </div>) })}
            </div>

           
        </>
    )

}