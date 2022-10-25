import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
export default function Detail() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resultado) => {
        const datos = resultado.data;
        setDetalle(datos);
      })
      .catch((error) => {
        console.log("hubo un error", error);
      });
  }, []);
  
  return (
    <div>
      <Link to="/home">
        <button> Home</button>
      </Link>

        <p> {detalle.status}</p>
        <p> {detalle.species}</p>
        <Card key={detalle.id} personaje={detalle} />
    </div>
  );
}
