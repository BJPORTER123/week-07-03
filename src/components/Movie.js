import React from "react";

const Movie=({name, url}) =>{
    return(
        <li>
            <a href={url}>Title:{name}</a>
        </li>
    )
}

export default Movie