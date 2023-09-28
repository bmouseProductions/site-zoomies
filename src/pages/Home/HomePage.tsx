
import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Banner from '../../assets/components/banner/Banner';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';

import banner from '../../assets/images/revendedores.webp'
import ilustracao from '../../assets/images/pets.webp'
import Botao from '../../assets/components/button/Index';

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
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] rounded ' src="https://www.youtube.com/embed/YbCEtHMdhbU?si=01T31s44gt5AAMBu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] rounded ' src="https://www.youtube.com/embed/zMUiskeQ1sI?si=gbefInTQ6ktGPqBA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] rounded ' src="https://www.youtube.com/embed/gBBg5i6AQs0?si=AHKZ10wx7BqKaPSP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] rounded ' src="https://www.youtube.com/embed/hh_PySplqNk?si=35wptomvgEYdG9HB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>, 
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

                <svg
                    id="wave"
                    style={{ transform: 'rotate(180deg)', transition: '0.3s', height:'80px', width: '100%' }}
                    viewBox="0 0 1440 490"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(245, 165, 24, 1)" offset="0%" />
                        <stop stopColor="rgba(245, 165, 24, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,98L48,98C96,98,192,98,288,147C384,196,480,294,576,343C672,392,768,392,864,334.8C960,278,1056,163,1152,122.5C1248,82,1344,114,1440,179.7C1536,245,1632,343,1728,375.7C1824,408,1920,376,2016,375.7C2112,376,2208,408,2304,383.8C2400,359,2496,278,2592,245C2688,212,2784,229,2880,261.3C2976,294,3072,343,3168,310.3C3264,278,3360,163,3456,155.2C3552,147,3648,245,3744,294C3840,343,3936,343,4032,318.5C4128,294,4224,245,4320,196C4416,147,4512,98,4608,98C4704,98,4800,147,4896,179.7C4992,212,5088,229,5184,269.5C5280,310,5376,376,5472,334.8C5568,294,5664,147,5760,73.5C5856,0,5952,0,6048,57.2C6144,114,6240,229,6336,261.3C6432,294,6528,245,6624,228.7C6720,212,6816,229,6864,236.8L6912,245L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"
                    ></path>
                </svg>
            </section>
            <section className='container mx-auto px-5 md:px-[5%] 2xl:px-[7%]'>
                <div className='pt-14 flex justify-center '>
                    <h1 className='text-[44px] lg:text-6xl font-bold text-center'>
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
                    />
                </div>  
            </section>

            <section className='container mx-auto px-5 md:px-[5%] 2xl:px-[7%] py-14 flex flex-col gap-10 lg:flex-row lg:justify-between waves'>
                <div className='lg:w-1/2 flex flex-col gap-10'>
                    <div>
                        <h2 className='text-4xl lg:text-5xl font-semibold mb-5'>
                            Por que escolher a Zoomies?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui officiis quis, autem ratione fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui officiis quis, autem ratione fugiat voluptatibus u voluptatibus ullam, optio facere itaque dignissimos numquam laudantium. Nisi libero excepturi magni deserunt? Iure, culpa?
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img className='xl:w-[400px] ' src={ilustracao} alt="" />
                    </div>
                </div>

                <div className='lg:w-1/2 flex flex-col gap-10'>
                    <div>
                        <h2 className='text-4xl lg:text-5xl font-semibold mb-5'>
                            Ultimo produto lançado
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui officiis quis, autem ratione fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui officiis quis, autem ratione fugiat voluptatibus u voluptatibus ullam, optio facere itaque dignissimos numquam laudantium. Nisi libero excepturi magni deserunt? Iure, culpa?
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img className='xl:w-[400px] ' src={ilustracao} alt="" />
                    </div>
                </div>
            </section>

            <section className=' bg-[#f5a518]'>
            
                <div className='container mx-auto px-5 md:px-[5%] 2xl:px-[7%] py-10 flex gap-10 flex-col lg:flex-row'>
                    <div className='lg:w-2/3 flex flex-col gap-7'>
                        <h2 className='text-4xl lg:text-5xl font-semibold text-white'>Linha de Naturais</h2>
                        <p className='text-[#1E1E1E] text-lg'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                        />
                    </div>
                    <img className='lg:w-[400px]' src={ilustracao} alt="" />
                </div>
            </section>
            
            <section className=' bg-[#f5a518]'>
                <div className='container mx-auto px-5 md:px-[5%] 2xl:px-[7%] py-10 flex gap-10 flex-col lg:flex-row-reverse'>
                    <div className='lg:w-2/3 flex flex-col lg:items-end gap-7'>
                        <h2 className='text-4xl lg:text-5xl font-semibold text-white'>Linha de Naturais</h2>
                        <p className='text-[#1E1E1E] text-lg'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                        <Botao 
                            children="Veja todos o produtos"
                            page='/produtos'
                        />
                    </div>
                    <img className='lg:w-[400px]' src={ilustracao} alt="" />
                </div>
            </section>

            <section className='container mx-auto px-5 md:px-[5%] 2xl:px-[7%] pt-14 mb-14 flex flex-col gap-10'>
                <div className=''>
                    <h2 className='text-4xl lg:text-5xl text-center font-semibold mb-5'>Nosso curso de adestramento</h2></div>
                <div className='w-full flex mx-auto'>
                    <SliderVideos
                        slideContent={slideVideos}
                        slideCount={slideCountVideos}
                    />
                </div>
            </section>

            <Fornecedores />
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