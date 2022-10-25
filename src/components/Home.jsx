import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Card from "./Card";
import axios from "axios";

function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resultado) => {
        const datos = resultado.data.results;
        console.log(datos);
        setLoading(false);
        setPersonajes(datos);
      })
      .catch((error) => {
        console.log("hubo un error", error);
      });
  }, []);

  if (loading) {
    return <div> Loading .... </div>;
  } else {
    return (
      <div>
        <ul>
          {personajes.map((p) => (
            <li key={p.id}> {p.name}</li>
          ))}
        </ul>
        <ul>
          {personajes.map((p) => (
            <Link
            key={p.id}
            to={"/detail/" + p.id}>  
              <Card key={p.id} personaje={p} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
