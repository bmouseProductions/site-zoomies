

import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import Sobre from "./pages/Sobre/SobrePage";
import Produtos from './pages/Produtos/ProdutosPage';
import ProdutoDetail from './pages/Produtos/ProtudoIndividual/ProdutoDetail';
import ErrorPage from "./pages/Error/ErrorPage";

import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import ScrollToTop from "./assets/components/scrollTop/Scroll";
import BackTop from "./assets/components/backTop/Index";

import { AllProducts } from "./compartilhado/Produtos";



export default function App() {

  

  return (
    <Router>
      <>
        <ScrollToTop />
        <Header />

        <main className=''>
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
            <Route path="/*" element={<ErrorPage />}/>
          </Routes>
          <BackTop/>
        </main>

        <footer>
          <Footer />
        </footer>

       
      </>
    </Router>
  )
}
