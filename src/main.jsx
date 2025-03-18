import "./main.css"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Saludo from './components/Saludo.jsx'
import Pagina404 from "./components/404.jsx"
import Cuadricula from "./components/Cuadricula.jsx"
import App from "./components/App.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>    
      <Route path="/" element={<App/>}>
        <Route index element={<Cuadricula />}/>
        <Route path="saludo" element={<Saludo/>}/>        
      </Route>  
      <Route path="*" element={<Pagina404/>}/>
    </Routes>
  </BrowserRouter>
    
)
