import "./main.css"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pagina404 from "./components/404.jsx"
import Cuadricula from "./components/Cuadricula.jsx"
import App from "./components/App.jsx"
import Home from "./Home.jsx"
import CriptoPage from "./components/cripto/CriptoPage.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>    
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
      </Route> 

      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<Cuadricula/>}/>
        <Route path=":id" element={<CriptoPage />}/>
      </Route>

      <Route path="*" element={<Pagina404 />}/>
    </Routes>
  </BrowserRouter>
    
)
