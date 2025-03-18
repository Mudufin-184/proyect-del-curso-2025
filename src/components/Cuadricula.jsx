import { useEffect, useState } from "react";
import axios from "axios";
import './Cuadricula.css'
import Cripto from "./cripto/Cripto.jsx";


function Cuadricula() {
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
      <div className="main-container">
        <h1>Lista de Criptomonedas</h1>
        <div className="cripto-container">
          {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Cripto 
              key={id} 
              name={name} price={priceUsd} 
              symbol={symbol} 
              changePercent24Hr={changePercent24Hr}
              id={id}
            /> 
          ))}
        </div> 
      </div>
      
    </>
  );
}

export default Cuadricula;
