

import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import Sobre from "./pages/Sobre/SobrePage";
import ErrorPage from "./pages/Error/ErrorPage";
import Footer from "./assets/components/footer/Footer";
import ProdutoDetail from './pages/Produtos/ProtudoIndividual/ProdutoDetail'


import Produtos from './pages/Produtos/ProdutosPage';
import Header from "./assets/components/header/Header";

import { AllProducts } from "./compartilhado/Produtos";


export default function App() {

  

  return (
    <Router>
      <>
        
        <Header />

        <main className='pt-[105px] md:pt-[104px]'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/produtos" element={<Produtos />}/>
            {AllProducts.map((produto, index) => (
              <Route
                key={index}
                path={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`}
                element={<ProdutoDetail produto={produto} />}
              />
            ))}
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>

       
      </>
    </Router>
  )
}
