import { configureStore } from "@reduxjs/toolkit";
import myWatchList from "../slices/Watch";


const store = configureStore({

reducer : {Watch:myWatchList}                //name of the producted state : ( the reducer from the slice's file (default exported ) ) of the state

                            })


export default store