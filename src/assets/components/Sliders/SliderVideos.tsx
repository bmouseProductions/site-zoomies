
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  slideContent:  JSX.Element[]
  slideCount: number;
}

export default function SliderVideos({slideContent}: SliderProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
      };

  return (
        <Slider {...settings} className="w-full m-auto mt-20 md:mt-[200px]">
            {slideContent.map((slide, index) => (
                <div key={index} className="w-full flex justify-center mb-3">
                    {slide}
                </div>
            ))}
          
        </Slider>
  );
}




/* arrays que precisma estar na pagina onde o swiper vai ser chamado contendo o conteudo dos sliders

const slideContent = [
    'Texto do Slide 1', 
    'Texto do Slide 2', 
    'Texto do Slide 3', 
    <Image key={1} src={import da imagem} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
];
        
const slideCount = slideContent.length;

o coponente será chamado assim:
<Slider
    slideContent= {slideContent}
    slideCount= {slideCount}
/>

<Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
    clickable: true,
    }}
    navigation={true}
    modules={[ Pagination, Navigation]}
    className="mySwiper rounded"
>
    {slideContent.map((content, index:number) => (
        <SwiperSlide key={index} className='w-full h-full flex justify-center items-center px-5'>
            {content}
        </SwiperSlide>
    ))}
</Swiper>
*/