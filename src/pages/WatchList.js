import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function  ()
{

    const watchList = useSelector(state=>state.Watch.moviesArr) 







    return (


        <>

            {watchList.length>0?
            <div className="container text-center">
                <div className="row row-cols-4"></div>

                {watchList.map((movieCardData) => { return (<div style={{ display: "inline-block", height: '400px' }} className="col">  <MovieCard yourdata={movieCardData} />  </div>) })}
            </div>
            :
            <div className="my-5" style={{display:'flex' , flexFlow:'column', alignItems:'center'}}>
             <h1>There is no favourite movies</h1>
             <FontAwesomeIcon style={{fontSize:'300px'}} icon={faHeartCrack} />
             <Link style={{fontSize:'30px'}}  to={'/movies-list'} className="btn btn-secondary">Back to movies list</Link>
             </div>
            }


            </>
    )
}