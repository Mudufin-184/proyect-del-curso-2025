import { Link } from "react-router-dom"
import "./Cripto.css"

function  Cripto({ id, name, priceUSD, symbol, changePercent24Hr }) {
  return (
    <div className="cripto">
        <Link to={`/criptomonedas/${id}`}><h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUSD).toFixed(4)}</p>
                <p><span className="label">Código: </span>{symbol}</p>
                <p>
                <span className="label">Variación 24hrs: </span>
                <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo" }>
                    {parseFloat(changePercent24Hr).toFixed(3)}%
                </span>
                </p>
            </div>
        </Link>  
    </div>
  )
}

export default Cripto