import { Link } from 'react-router-dom';

import { AllProducts } from '../../compartilhado/Produtos'

import SliderProdutos from '../../assets/components/sliders/SliderProdutos'
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import SliderVideos from '../../assets/components/sliders/SliderVideos'
import Banner from '../../assets/components/banner/Banner';
import Fornecedores from '../../assets/components/fornecedores/Fornecedores';

import banner from '../../assets/images/revendedores.webp'



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

            <section className='container mx-auto px-5 md:px-[5%] py-10'>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <h1>
                        Por que escolher a Zoomies?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui officiis quis, autem ratione fugiat voluptatibus ullam, optio facere itaque dignissimos numquam laudantium. Nisi libero excepturi magni deserunt? Iure, culpa?
                    </p>
                </div>
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