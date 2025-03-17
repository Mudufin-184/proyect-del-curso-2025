import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
function App() {
  const [criptos, setCriptos] = useState([]); 
  const apiUrl = "https://api.coincap.io/v2/"; 

  useEffect(() => {
    axios.get(`${apiUrl}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch((error) => {
        console.error("La petición falló:", error);
      });
  }, []);  

  if (criptos.length === 0) return <span>Cargando...</span>;

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>Nombre: {name} | Precio: ${parseFloat(priceUsd).toFixed(2)}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
