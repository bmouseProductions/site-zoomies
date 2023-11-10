import { AllProducts } from '../../compartilhado/Produtos';

import Lottie from 'react-lottie-player';

import Banner from '../../assets/components/banner/Banner';
import CardProduto from '../../assets/components/cardProdutos/CardProduto';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';
import SliderProdutos from '../../assets/components/sliders/SliderProdutos';

import bannerImg from '../../assets/images/gondola.webp'
import Botao from '../../assets/components/button/Botao';

import selo from '../../assets/images/animations/patinha.json'
import hug from '../../assets/images/animations/hugg.json'

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
                    imagem={bannerImg}
                    title='Conheça a Zoomies'
                    text='A Zoomies é a mais nova marca do Grupo Patense, dedicada a oferecer petiscos saborosos e de alta qualidade para os nossos amigos pets.'
                    botao='exe'
                    styleExtra='mb-5 mx-auto flex justify-center w-[280px] max-w-[400px] sm:max-w-none lg:h-[650px] lg:w-auto'
                />
            </section>

            <section className='max-w-[1276px] mx-auto max-h-[650px] md:max-h-[800px] lg:max-h-[400px] px-5 pt-20 pb-10 flex gap-10 flex-col lg:flex-row '>
                <div className='lg:w-full  flex flex-col gap-5'>
                    <p className='text-[#1E1E1E] text-xl'>A missão da Zoomies é revolucionar o mercado pet com sua inovação, qualidade e atenção aos detalhes. Nós acreditamos que os pets merecem o melhor, por isso, selecionamos os ingredientes com muito cuidado e criamos receitas saborosas e saudáveis para eles.</p>
                    
                </div>
                <div className='relative top-[-40px]  lg:top-[-100px] '>
                    <Lottie
                        play
                        loop
                        animationData={hug}
                        className='w-[80%] mx-auto '
                    />
                </div>
            </section>
        
            <section className='max-w-[1276px] mx-auto px-5 mb-10 flex lg:gap-10 flex-col lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col lg:justify-center gap-5'>
                    <p className='text-[#1E1E1E] text-xl'>A nossa embalagem moderna e vibrante é um convite para que os donos de pets escolham os nossos produtos e vejam a diferença que eles fazem na vida de seus animais de estimação.</p>
                    <p className='text-[#1E1E1E] text-xl'>Nos orgulhamos em ser a escolha certa para aqueles que amam seus pets e querem oferecer a eles o que há de melhor em termos de nutrição e diversão</p>
                </div>
                <div>
                    <Lottie
                        play
                        loop
                        animationData={selo}
                        className='w-[80%] mx-auto'
                    />
                </div>
            </section>

            <section className='max-w-[1276px] mx-auto px-5 '>
                <div className='flex gap-5' id='slider-produtos'>
                    <SliderProdutos 
                        slideContent={slideProdutos}
                        slideCount={slideCountProdutos}
                    />
                </div>
                <div className='mt-10 mb-16 flex justify-center '>
                    <Botao 
                        children='Veja todos os produtos'
                        page='/produtos'
                        icon=''
                    />
                </div>  
            </section>

            <Fornecedores />
        </>
    )
}