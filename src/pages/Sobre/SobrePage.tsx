import { Link } from 'react-router-dom';

import { AllProducts } from '../../compartilhado/Produtos';

import Banner from '../../assets/components/banner/Banner';
import CardProduto from '../../assets/components/cardProdutos/CardProduto';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';
import SliderProdutos from '../../assets/components/sliders/SliderProdutos';

import banner from '../../assets/images/revendedores.webp'


export default function SobrePage(){

    /*SLIDE PRODUTOS*/
    const slideProdutos = [
        ...AllProducts.map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-5 mt-10'
            />
        ))
    ];
    const slideCountProdutos= slideProdutos.length;

    return (
        <>
            <section>
                <Banner
                    imagem={banner}
                    title='Lorem ipsum dolor, sit amet consectetur adipisicing.'
                    text='É certo cuidar de um amigo que faz parte da sua família há muito tempo. Eles nos tornam pessoas melhores e, por isso, merecem um alimento de qualidade e um lar com muito amor.'
                    botao='exe'
                />
            </section>

            <section className='container mx-auto px-5 md:px-[5%] py-16'>
                <h1 className='max-w-[600px] mx-auto text-[45px] lg:text-6xl font-bold text-center'>
                    Nós alimentamos o melhor em cães de todas as idades e todas as raças.
                </h1>

                <p className='text-2xl max-w-[600px] mx-auto mt-[30px] text-center '>
                    Nossos produtos - de petiscos a refeições completas e balanceadas - são nutritivos, de alta qualidade e muito saborosos.
                    <br />
                    <br />
                    E quando não estamos inventando petiscos ou brincando com nossos cães, estamos trabalhando para acabar com a triste situação de cães que vivem nas ruas. Porque todos os cães merecem um lar com muito amor.
                </p>
            </section>

            <section className='container mx-auto px-5 md:px-[5%]'>
                <div className='flex gap-5' id='slider-produtos'>
                    <SliderProdutos 
                        slideContent={slideProdutos}
                        slideCount={slideCountProdutos}
                    />
                </div>
                <div className='mt-10 mb-16 flex justify-center '>
                    <Link to="/produtos" id='logoImg' className='w-auto underline text-2xl text-black'>
                        Veja todos os produtos
                    </Link>
                </div>  
            </section>

            <Fornecedores />
        </>
    )
}