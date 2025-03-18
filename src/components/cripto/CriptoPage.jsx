import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CriptoPage.css"
function CriptoPage() {
    const apiUrl = "https://api.coincap.io/v2/"; 
    const { id } = useParams(); // Extraemos el ID correctamente

    const [cripto, setCripto] = useState(null);  // Inicializar como null
    const [history, setHistory] = useState([]); // Inicializar como un array vacío

    useEffect(() => {
        axios.get(`${apiUrl}assets/${id}`)
            .then(response => setCripto(response.data.data))
            .catch(error => console.error("Error al obtener la criptomoneda:", error));
   
        axios.get(`${apiUrl}assets/${id}/history?interval=d1`)
            .then(response => setHistory(response.data.data))
            .catch(error => console.error("Error al obtener el historial:", error));
    }, [id]); // Se ejecuta cuando `id` cambia
    
    if (!cripto) return <h2>Cargando...</h2>; // Manejo de carga

    return (
        <>
        <div className="cripto-page-container">
        
        <div className="info">
            <div className="main-info">
                <span>Ranking: {cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <span className="symbol">{cripto.symbol}</span>
            </div>
            <div className="details">
                <ul>
                <li className="detail">
                    <span className="label">Precio: </span>
                    <span>{(cripto.priceUsd, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">MaxSupply: </span>
                    <span>{(cripto.maxSupply, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Market Cap (USD): </span>
                    <span>{(cripto.marketCapUsd, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Volumen (USD - 24 Hrs.): </span>
                    <span>{(cripto.volumeUsd24Hr, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Variación (24 Hrs.): </span>
                    <span>{(cripto.changePercent24Hr, 3)}</span>
                </li>
                <li className="detail">
                    <span className="label">Vwap 24 Hrs.: </span>
                    <span>{(cripto.vwap24Hr, 3)}</span>
                </li>
                </ul>
            </div>
            </div>


            <div className="history">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(({ time, priceUsd }) => (
                            <tr key={time}>
                                <td>{new Date(time).toLocaleDateString()}</td> {/* Convierte el timestamp en fecha legible */}
                                <td>${Number(priceUsd).toFixed(2)}</td> {/* Asegura formato de precio */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
            
        </>
    );
}

export default CriptoPage;
