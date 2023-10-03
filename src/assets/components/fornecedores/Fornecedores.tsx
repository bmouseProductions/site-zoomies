import Lottie from 'react-lottie-player'

import paw from '../../images/paw.json'
import mercado from '../../images/logos-marketplace/mercado-livre-logo-4-2.png'
import frio from '../../images/logos-marketplace/pontofrio-logo-4.png'
import bahia from '../../images/logos-marketplace/casas-bahia-logo-3-1.png'
import extra from '../../images/logos-marketplace/extra-logo-mercado-3.png'


export default function Fornecedores(){
    return(
        <>
            <section className=" text-black">
                <Lottie
                    play
                    loop
                    animationData={paw}
                    className='w-[50px] mx-auto'
                />
                <div className='max-w-[1276px] mx-auto px-5 pb-10 flex flex-col items-center'>
                    <h1 className='text-4xl md:text-5xl text-center'>
                        Onde encontrar os produtos Zoomies?  
                    </h1>
                    <div className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] grid grid-cols-4 justify-items-center gap-5 mt-10'>
                        <a 
                            href="https://lista.mercadolivre.com.br/zoomies_NoIndex_True_SHIPPING*ORIGIN_10215068#applied_filter_id%3DSHIPPING_ORIGIN%26applied_filter_name%3DOrigem+do+frete%26applied_filter_order%3D10%26applied_value_id%3D10215068%26applied_value_name%3DLocal%26applied_value_order%3D2%26applied_value_results%3D79%26is_custom%3Dfalse" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={mercado} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.pontofrio.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={frio} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.casasbahia.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={bahia} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>

                        <a 
                            href="https://www.extra.com.br/zoomies/b" 
                            target="_blank" 
                            className='py-2 md:py-10 md:px-7 px-4 w-full flex flex-col items-center justify-center rounded bg-white shadow-lg md:shadow-2xl text-white'
                        >
                            <img src={extra} className='w-full md:h-[40px] lg:h-[50px] xl:h-[60px] ' alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}