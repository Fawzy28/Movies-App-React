import { useRef, useState } from "react"
import { useEffect } from "react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Detail from "../pages/Detail";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../slices/Watch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function (props) {

    const movieCard = props.yourdata


    const dispatch = useDispatch()
    const Watch = useSelector(state => state.Watch.moviesArr)             //for watchlist

    const fav = useRef()

    //const favourite = ((e) => { e.target.checked ? dispatch(addMovie(movieCard)) : dispatch(removeMovie(Watch.indexOf(movieCard))) })

    //    { (Watch.includes(movieCard))? (fav.current.checked = true  ) : (fav.current.checked = false) }

    return (
        <div className="card mb-3 mx-2" style={{ maxWidth: '540px', height: '300px', marginTop: '20px' }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <Link to={`/movie-details/${movieCard.id}`} > <img src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} className="img-fluid rounded-start" alt={movieCard.title} /></Link>



                    { (   Watch.filter((favmovie)=>{ return (favmovie.title===movieCard.title)})    ).length>0 ?         //there is proplems if you check the equality between movie card object came from rendring the list and the the movie from the watch list even if they was the same object ,, try to compare between two unique properties

                     
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"    onClick={()=>{dispatch(removeMovie(Watch.indexOf(movieCard)))}}    >
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        {/* {console.log ((Watch.filter((favmovie)=>{ return (favmovie.title===movieCard.title)})), 'xxxxxx') }
                        {console.log(movieCard , 'yyyyyyy')} */}
                    </svg>
                    
                    :
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"    onClick={() => { dispatch(addMovie(movieCard)) }}       >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        {/* {console.log ('false')} */}
                        </svg>
                    
                     }


                    <label className="form-check-label mx-3" for="flexCheckChecked"> Add to favourite </label>


                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{movieCard.title}</h5>
                        <p className="card-text">{movieCard.overview}</p>
                        <p className="card-text"><small className="text-body-secondary">{movieCard.release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>


    )
}