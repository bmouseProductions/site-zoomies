import { Link } from 'react-router-dom';

import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Banner from '../../assets/components/banner/Banner';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';

import banner from '../../assets/images/revendedores.webp'
import ilustracao from '../../assets/images/pets.webp'



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
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] sm:h-[400px]  lg:h-[230px]  px-[10px] ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    ]

    const slideCountVideos= slideVideos.length;
    
    return (
        <>

            <section>
                <Banner
                    imagem={banner}
                    title='Lorem ipsum dolor, sit amet consectetur adipisicing.'
                    text='texto de chamada para nossos produtos de extrema qualidade que dá umm pau em todos os outros concorrentes'
                    botao='Conheça nossos produtos'
                />
            </section>

            <section className='container mx-auto px-5 md:px-[5%]'>
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
                    <Link to="/produtos" id='logoImg' className='w-auto underline text-2xl text-black'>
                        Veja todos os produtos
                    </Link>
                </div>  
            </section>

            <section className='container mx-auto px-5 md:px-[5%] py-14 flex flex-col gap-10 lg:flex-row lg:justify-between'>
                <div className='lg:w-1/2 flex flex-col gap-10'>
                    <div>
                        <h2 className='text-5xl font-semibold'>
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
                        <h2 className='text-5xl font-semibold'>
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

            <section className='container mx-auto px-5 md:px-[5%] flex gap-10 flex-col lg:flex-row'>
                <div className='lg:w-2/3 flex flex-col gap-7'>
                    <h2 className='text-5xl font-semibold'>Linha de Naturais</h2>
                    <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                    <Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                        <button className='bg-[#04083a] py-3 px-10 rounded-2xl hover:bg-red-600 transition-all'>
                            Ver todos os produtos
                        </button>
                    </Link>
                </div>
                <img className='lg:w-[400px]' src={ilustracao} alt="" />
            </section>

            <section className='container mx-auto px-5 md:px-[5%] mt-10 flex gap-10 flex-col lg:flex-row-reverse'>
                <div className='lg:w-2/3 flex flex-col items-end gap-7'>
                    <h2 className='text-5xl font-semibold'>Linha de Naturais</h2>
                    <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro exercitationem facilis et odit a ex in laudantium deserunt totam mollitia modi eaque corrupti repellendus repudiandae ipsa. Porro, harum eveniet! sit amet consectetur adipisicing elit. Quibusdam voluptas, dicta, maxime corrupti doloribus sint a, mollitia dolorem maiores eum error quo consequatur ad? Tempora tenetur iusto dolorum! Et, asperiores?</p>
                    <Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                        <button className='bg-[#04083a] py-3 px-10 rounded-2xl hover:bg-red-600 transition-all'>
                            Ver todos os produtos
                        </button>
                    </Link>
                </div>
                <img className='lg:w-[400px]' src={ilustracao} alt="" />
            </section>

            <section className='container mx-auto px-5 md:px-[5%] mb-20'>
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