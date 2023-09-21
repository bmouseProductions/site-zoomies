import icon from '../../images/icon-pata.svg'

import mercado from '../../images/logos-marketplace/mercado-livre-logo-4-2.png'
import frio from '../../images/logos-marketplace/pontofrio-logo-4.png'
import bahia from '../../images/logos-marketplace/casas-bahia-logo-3-1.png'
import extra from '../../images/logos-marketplace/extra-logo-mercado-3.png'

export default function Fornecedores(){
    return(
        <section className=" bg-[#04083a] text-white">
            <div className='container py-10 mx-auto flex flex-col items-center'>
                <img src={icon} alt="" />
                <h1 className='text-[45px] font-bold text-center'>
                    Onde encontrar os produtos Zoomies?  
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    <div className='py-8 px-4 w-[300px] flex flex-col items-center rounded bg-white'>
                        <img src={mercado} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-[300px] flex flex-col items-center rounded bg-white'>
                        <img src={frio} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-[300px] flex flex-col items-center rounded bg-white'>
                        <img src={bahia} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>

                    <div className='py-8 px-4 w-[300px] flex flex-col items-center rounded bg-white'>
                        <img src={extra} className='max-w-[180px] h-[50px]' alt="" />
                        <a href="" target="_blank" className='py-2 px-5 mt-7 md:mt-10 font-semibold bg-[#dd211a] hover:bg-[#04083A] transition rounded'>
                            Visitar site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}