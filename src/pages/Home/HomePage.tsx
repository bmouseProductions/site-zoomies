import Lottie from 'react-lottie-player'

import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Banner from '../../assets/components/banner/Banner';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';
import Botao from '../../assets/components/button/Botao';

import banner from '../../assets/images/revendedores.webp'
import ilustracao from '../../assets/images/pets.webp'
import paw from '../../assets/images/paw.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

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
                    title='Lorem ipsum dolor, sit amet consectetur adipisicing.'
                    text='texto de chamada para nossos produtos de extrema qualidade que dá umm pau em todos os outros concorrentes'
                    botao='Conheça nossos produtos'
                />
            </section>
            
            
            

            <Fornecedores />

            <section className='max-w-[1276px] mt-20 mx-auto px-5'>
                <div className='pt-14 flex flex-col items-center justify-center '>
                <Lottie
                    play
                    loop
                    animationData={paw}
                    className='w-[50px] mx-auto'
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
                    <p className='text-[#1E1E1E] text-lg'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] bg-[#f5a518] rounded' src={ilustracao} alt="" />
            </section>
        
            <section className='max-w-[1276px] mx-auto px-5 pt-12 flex gap-10 flex-col lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col lg:items-end gap-5'>
                    <h1 className='text-3xl lg:text-5xl  text-black'>Linha de Naturais</h1>
                    <p className='text-[#1E1E1E] text-lg'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                    <div className='flex justify-center lg:justify-start'>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                            icon= {''}
                        />
                    </div>
                </div>
                <img className='lg:w-[400px] bg-[#f5a518] rounded' src={ilustracao} alt="" />
            </section>
            

            <section className='max-w-[1276px] mx-auto px-5 pt-20  flex flex-col gap-7'>
                
                <div className=''>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[50px] mx-auto'
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
                        children= 'Increva-se'
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