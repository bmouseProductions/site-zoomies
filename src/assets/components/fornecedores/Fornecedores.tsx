import icon from '../../images/icon-pata.svg'

import mercado from '../../images/logos-marketplace/mercado-livre-logo-4-2.png'
import frio from '../../images/logos-marketplace/pontofrio-logo-4.png'
import bahia from '../../images/logos-marketplace/casas-bahia-logo-3-1.png'
import extra from '../../images/logos-marketplace/extra-logo-mercado-3.png'

export default function Fornecedores(){
    return(
        <section className=" bg-[#04083a] text-white">
            <div className='container mx-auto px-5 md:px-[5%] py-10 flex flex-col items-center'>
                <img src={icon} alt="" />
                <h1 className='text-[45px] font-bold text-center'>
                    Onde encontrar os produtos Zoomies?  
                </h1>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-5 mt-10'>
                    <div className='py-8 px-4 w-full flex flex-col items-center rounded bg-white'>
                        <img src={mercado} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="https://lista.mercadolivre.com.br/zoomies_NoIndex_True_SHIPPING*ORIGIN_10215068#applied_filter_id%3DSHIPPING_ORIGIN%26applied_filter_name%3DOrigem+do+frete%26applied_filter_order%3D10%26applied_value_id%3D10215068%26applied_value_name%3DLocal%26applied_value_order%3D2%26applied_value_results%3D79%26is_custom%3Dfalse" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-full flex flex-col items-center rounded bg-white'>
                        <img src={frio} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="https://www.pontofrio.com.br/zoomies/b" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-full flex flex-col items-center rounded bg-white'>
                        <img src={bahia} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="https://www.casasbahia.com.br/zoomies/b" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-full flex flex-col items-center rounded bg-white'>
                        <img src={extra} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="https://www.extra.com.br/zoomies/b" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}