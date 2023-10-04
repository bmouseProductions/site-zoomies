import CardProduto from "../../../assets/components/cardProdutos/CardProduto";
import SliderProdutos from "../../../assets/components/sliders/SliderProdutos";
import { AllProducts } from "../../../compartilhado/Produtos";

import logo from '../../../assets/images/logoZoomies.webp'
import { Link } from "react-router-dom";

interface Produto {
    nome: string;
    imagem: string;
    descricao: string;
    composicao: string;
    doadores?: string;
    substitutos?: string;
    garantias?: string;
    linha: string;
}

interface ProductDetailProps {
    produto: Produto;
}

/*SLIDE BIFINHOS*/
const slideBifinhos = [
    ...AllProducts.filter(produto => produto.linha === 'bifinhos').map( (produto) => (
        <CardProduto 
            link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
            image= {produto.imagem} 
            name= {produto.nome}
            styleExtra='mx-5 mt-10'
        />
    ))
];
const slideCountBifinhos= slideBifinhos.length;

/*SLIDE BIFINHOS*/
const slideNaturais = [
    ...AllProducts.filter(produto => produto.linha === 'naturais').map( (produto) => (
        <CardProduto 
            link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
            image= {produto.imagem} 
            name= {produto.nome}
            styleExtra='mx-5 mt-10'
        />
    ))
];
const slideCountNaturais= slideNaturais.length;

export default function ProdutoDetail({ produto }: ProductDetailProps){

    
    
    return (
        <>
            <div className="h-[100px] bg-[#04083a] hidden md:block"></div>
            <section className="max-w-[1276px] mx-auto px-5  text-black">
                <img src={logo} alt="" className='max-w-[400px] w-[90%] mx-auto py-10 md:hidden' />
                <div className="w-full flex flex-col ">
                    <h1 className="my-10 text-xl font-medium ">
                        <Link to='/produtos' className="my-10 text-xl font-medium ">Produtos</Link> / {produto.nome}
                    </h1>

                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <img className="w-full max-w-lg " src={produto.imagem} alt="" />
                        <div className="flex flex-col pt-10 ">
                            <h1 className="text-3xl md:text-4xl md:mt-6 mb-2">{produto.nome}</h1>
                            <p className=" ">
                                {produto.descricao}
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="mb-10 max-w-80% ">
                    <h2 className="text-3xl md:text-4xl mt-6 mb-2">Descrição</h2>
                    <div className="flex flex-col gap-2">
                        <p>
                            <strong className="text-lg font-medium ">Composição: </strong>
                            {produto.composicao}
                        </p>

                        {produto.linha === 'bifinhos' && (
                            <div className="flex flex-col gap-2">
                                <p>
                                    <strong className="text-lg font-medium ">Ingredientes transgênicos / Espécies doadoras do gene: </strong>
                                    {produto.doadores}
                                </p>
                                <p>
                                    <strong className="text-lg font-medium ">Eventuais Subtitutos: </strong>
                                    {produto.substitutos}
                                </p>
                                <p>
                                    <strong className="text-lg font-medium ">Níveis de garantia: </strong>
                                    {produto.garantias}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="max-w-[1276px] mx-auto px-5  text-black">
                
                {produto.linha === 'bifinhos' ?  (
                    <div className='flex gap-5 mb-10'>
                        <SliderProdutos 
                            slideContent={slideBifinhos}
                            slideCount={slideCountBifinhos}
                        />
                    </div>
                ) : (
                    <div className='flex gap-5 mb-10'>
                        <SliderProdutos 
                            slideContent={slideNaturais}
                            slideCount={slideCountNaturais}
                        />
                    </div>
                )}
            </section>
        </>
    )
}