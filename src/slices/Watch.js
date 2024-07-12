import { createSlice } from "@reduxjs/toolkit";
const init = {
    moviesArr : []
}

const myWatchList =  createSlice({
    name:"WatchSlice",
    initialState:init,
    reducers:
    {
        addMovie:(state,action)=>{state.moviesArr.push(action.payload)},                            //first reducer's function         //the action addmovie will be created explecitly with the same name
        removeMovie:((state,action)=>{state.moviesArr.splice(action.payload,1)})                    //second reducer's function       // ''
    }                                                                                     // state is the old value of the state
}
) 

export const {addMovie,removeMovie} =  myWatchList.actions
export default myWatchList.reducer