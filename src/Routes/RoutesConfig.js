import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() =>  import('../pages/Home') );
const List = React.lazy(() =>  import('../pages/List') )
const WatchList = React.lazy(() =>  import('../pages/WatchList') )
const Register = React.lazy(() =>  import('../pages/Register') )
const NotFound = React.lazy(() =>  import('../pages/NotFound') )
const Details = React.lazy(() =>  import('../pages/Detail') )



export default function RoutesConfig() {
    return (
        <>
        <Suspense fallback={<h1 style={{display:'flex', alignItems:'center' }} >wait please..</h1>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies-list' element={<List />} />
                <Route path='/movie-details/:id' element={<Details />} />
                <Route path='/watch-list' element={<WatchList />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
        </>
    )
}
