import React from "react";

// export default function Card({ name, image, }) {
export default function Card({ personaje }) {
  return (
    
    <div>
      <h3>{personaje.name}</h3>
      <img src={personaje.image} alt="img de r & m" />
    </div>
  );
}
