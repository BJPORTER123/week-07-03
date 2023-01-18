import React from "react";
import MovieName from "./Movie";

const MovieList =({movieNameAsAProp}) =>{
    const arrayOfMovies = movieNameAsAProp.map((movie)=>{
        return (
            <MovieName name={movie.name} url={movie.url}/>
        )
    })
    return(
        <>
            {arrayOfMovies}
        </>
    )
}

export default MovieList