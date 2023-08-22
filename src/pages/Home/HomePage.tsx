
import zoomiesDesk from '../../assets/images/banners/zoomiesDesk.webp'
import zoomiesMobile from '../../assets/images/banners/zoomiesMobile.webp'
import bifinhoDesk from '../../assets/images/banners/bifinhoDesk.webp'
import bifinhoMobile from '../../assets/images/banners/bifinhoMobile.webp'
import naturaisDesk from '../../assets/images/banners/naturaisDesk.webp'
import naturaisMobile from '../../assets/images/banners/naturaisMobile.webp'

import SliderBanner from '../../assets/components/Sliders/SliderBanner'
import SliderProdutos from '../../assets/components/Sliders/SliderProdutos'
import CardProduto from '../../assets/components/CardProdutos/CardProduto'


import { AllProducts } from '../../compartilhado/Produtos'
import SliderVideos from '../../assets/components/Sliders/SliderVideos'
// import { diversos } from '../../compartilhado/Produtos'


export default function HomePage(){

    /*SLIDER BANNER*/
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

    /*SLIDE VIDEOS*/
    const slideVideos = [
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        <iframe className='w-[100%] h-[200px] md:w-[80%] sm:h-[400px] lg:w-[400px] lg:h-[230px] 2xl:w-[400px] m-auto ' src="https://www.youtube.com/embed/AmhNjQfgakY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    ]

    const slideCountVideos= slideVideos.length;
    
    return (
        <>
            <section>
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
            </section>

            <section>
                <div className='flex gap-5'>
                    <SliderProdutos 
                        slideContent={slideProdutos}
                        slideCount={slideCountProdutos}
                    />
                </div>
            </section>

            <section className='w-full  mb-20 px-5'>
                <div className='w-full 2xl:max-w-[1800px] flex mx-auto'>
                    <SliderVideos
                        slideContent={slideVideos}
                        slideCount={slideCountVideos}
                    />
                </div>
            </section>
        </>
    )
}