import { Link } from "react-router-dom"
import "./Cripto.css"
function Cripto ({name, price, symbol,changePercent24Hr,id}) {
    return(
        <>
        <Link to={`/criptomonedas/${id}`}>
            <div className="cripto">
                <h2>{name}</h2>
                <div className="info">
                <p><span className="label">Precio:</span> {Number(price).toFixed(4)} USD</p>
                <p><span className="label">Simbolo:</span> {symbol}</p>
                <p>
                    <span className="label">Variación 24Hrs:</span> 
                    <span className={parseFloat(changePercent24Hr) >  0 ? "positivo": "negativo"}>
                        {Number(changePercent24Hr).toFixed(4)}%
                    </span>
                </p>
                
                </div>
            </div>
        </Link>
        </>
        
    )
}

export default Cripto
