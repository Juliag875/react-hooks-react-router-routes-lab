import React from "react";
import { actors } from "../data";

function Actors() {
 const actorsList = actors.map(actor=>(
   <div key={actor.name}>
     <h2>{actor.name}</h2>
     <ul> <strong>Actors:</strong> 
       {actor.movies.map(movie=>(
          <li key={movie}>{movie}</li>
       ))}
      </ul>
   </div>

 ))
 
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
    </div>;
}

export default Actors;
