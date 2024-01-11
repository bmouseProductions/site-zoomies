import Lottie from 'react-lottie-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Banner from '../../assets/components/banner/Banner';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';
import Botao from '../../assets/components/button/Botao';

import banner from '../../assets/images/revendedores.webp'
//import ilustracao from '../../assets/images/pets.webp'
import paw from '../../assets/images/animations/paw.json'
import naturais from '../../assets/images/naturais.webp'
import bifinhos from '../../assets/images/bifinhos.webp'


export default function HomePage(){

    /*SLIDER BANNER
    const slideContentDesk = [
        <img src={zoomiesDesk} alt="" />,
        <img src={bifinhoDesk} alt="" />,
        <img src={naturaisDesk} alt="" />,
    ];
    const slideCountDesk = slideContentDesk.length;

    const slideContentMobile = [
        <img src={zoomiesMobile} alt="" />,
        <img src={bifinhoMobile} alt="" />,
        <img src={naturaisMobile} alt="" />
    ];
    const slideCountMobile = slideContentMobile.length;
    */

    /*SLIDE PRODUTOS*/
    const slideProdutos = [
        ...AllProducts.map( (produto) => (
            <CardProduto 
                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`} 
                image= {produto.imagem} 
                name= {produto.nome}
                styleExtra='mx-3 mt-10 '
            />
        ))
    ];
    const slideCountProdutos= slideProdutos.length;

    /*SLIDE VIDEOS*/
    const slideVideos = [
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/YbCEtHMdhbU?si=01T31s44gt5AAMBu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/zMUiskeQ1sI?si=gbefInTQ6ktGPqBA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/gBBg5i6AQs0?si=AHKZ10wx7BqKaPSP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[500px]  px-[10px] rounded ' src="https://www.youtube.com/embed/hh_PySplqNk?si=35wptomvgEYdG9HB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>, 
    ]

    const slideCountVideos= slideVideos.length;
    
    return (
        <>

            <section className=''>
                <Banner
                    imagem={banner}
                    title='A revolução do mercado pet brasileiro!'
                    text='Com a melhor fórmula e ingredientes selecionados, oferecemos petiscos com qualidade, sabor, saúde e diversão para os nossos amigos de quatro patas.'
                    botao='Conheça nossos produtos'
                    styleExtra=''
                />
            </section>
            
            
            

            <Fornecedores />

            <section className='max-w-[1276px] mx-auto px-5 lg:mt-10 '>
                <div className='lg:pt-14 flex flex-col items-center justify-center '>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <h1 className='text-3xl lg:text-5xl  text-center'>
                        Conheça nossos produtos
                    </h1>
                </div>
                <div className='flex gap-5' id='slider-produtos'>
                    <SliderProdutos 
                        slideContent={slideProdutos}
                        slideCount={slideCountProdutos}
                    />
                </div>
                <div className='mt-12 flex justify-center '>
                    <Botao 
                        children="Veja todos o produtos"
                        page='/produtos'
                        icon= {''}
                    />
                </div>  
            </section>
            
            <section className='max-w-[1276px] mx-auto px-5 pt-20 pb-10 flex gap-10 flex-col lg:flex-row'>
                <div className='lg:w-2/3 flex flex-col gap-5'>
                    <h1 className='text-3xl lg:text-5xl  text-black'>Linha de Bifinhos</h1>
                    <p className='text-[#1E1E1E] text-lg'>Os Bifinhos, em diversos sabores e preparados para vários portes e idades, são petiscos que além de saborosos, beneficiam a saúde de seu pet. Ricos em proteínas, esses petiscos são ótimos para manter os músculos e ossos saudáveis. Além disso, auxiliam na higiene dental, o que previne problemas bucais. E, para um bom treinamento do seus pets, os Bifinhos são ótimas recompensas, oferecem estímulos sensoriais e fortalecem o vínculo, promovendo confiança entre você e seu animal de estimação.</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] bg-[#f5a518]  rounded' src={bifinhos} alt="" />
            </section>
        
            <section className='max-w-[1276px] mx-auto px-5 pt-12 flex gap-10 flex-col lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col lg:items-end gap-5'>
                    <h1 className='text-3xl lg:text-5xl  text-black'>Linha de Naturais</h1>
                    <p className='text-[#1E1E1E] text-lg'>O estresse pode causar diversos problemas de saúde nos cães, por isso criamos uma linha de produtos especiais que ajudam os animais a controlar a sua ansiedade e irritação. Essa linha de naturais antiestresse veio para ajudar o seu cãozinho a ter mais tranquilidade no dia a dia, unindo bem-estar e lazer, fazendo com que ele se sinta verdadeiramente feliz e saudável.</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] bg-[#f5a518] rounded' src={naturais} alt="" />
            </section>
            

            <section className='max-w-[1276px] mx-auto px-5 pt-20  flex flex-col gap-7'>
                
                <div className=''>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <h1 className='text-3xl lg:text-5xl text-center '>Assista os vídeos e conheça melhor nossos produtos</h1>
                </div>
                <div className='w-full flex mx-auto' id='slick-videos'>
                    <SliderVideos
                        slideContent={slideVideos}
                        slideCount={slideCountVideos}
                    />
                </div>
                <div className='w-auto mx-auto  '>
                    <Botao
                        children= 'Inscreva-se'
                        page='https://www.youtube.com/@zoomiesbr'
                        icon= {<FontAwesomeIcon icon={faYoutube} className="ml-3 text-lg"/>}
                    />
                </div>
                
            </section>
             
            
        </>
    )
}

/*
                <div>
                    <div className='hidden sm:block'>
                        <SliderBanner 
                            slideContent={slideContentDesk}
                            slideCount={slideCountDesk}
                        />
                    </div>

                    <div className='sm:hidden'>
                        <SliderBanner 
                            slideContent={slideContentMobile}
                            slideCount={slideCountMobile}
                        />
                    </div>
                </div>
*/              