import logoFarol from '../../images/logosPatense/logo-dark.svg'
import logoPatense from '../../images/logosPatense/patense.svg'
import logoZoomies from '../../images/logosPatense/Logo-Zoomies-Pet-Care-horizontal-scaled.webp'
import logoOriginalis from '../../images/logosPatense/originalis.svg'
import logoPetsmellon from '../../images/logosPatense/petsmellon.svg'
import logoBiosea from '../../images/logosPatense/biosea.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return (
        <footer className="w-full px-5  bg-[#f5a518]">
            <div  className='w-full max-w-[1300px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 '>
                <a href='https://www.biosea.com.br/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer '>
                    <img src={logoBiosea} className='w-[250px] min-h-[70px]  ' alt="" />
                </a>
                
                <a href='https://www.farol.ind.br/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer'>
                    <img src={logoFarol} className='w-[250px] min-h-[70px]  ' alt="" />
                </a>

                <a href='https://originalisbiotech.com.br/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer '>
                    <img src={logoOriginalis} className='w-[250px] min-h-[70px]  ' alt="" />
                </a>

                <a href='https://patense.com.br/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer '>
                    <img src={logoPatense} className='w-[250px] min-h-[70px]  ' alt="" />
                </a>

                <a href='https://petsmellon.com.br/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer '>
                    <img src={logoPetsmellon} className='w-[250px] min-h-[70px]  ' alt="" />
                </a>

                <a href='https://lojazoomies.com/' className='w-full xl:max-w-[400px] min-h-[160px] p-5 flex justify-center items-center bg-white shadow-2xl rounded-3xl cursor-pointer '>
                    <img src={logoZoomies} className='  ' alt="" />
                </a>
                
            </div>

            <div className='w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-white'>
                <div className='flex gap-2 justify-center items-center'>
                    <a href="https://www.facebook.com/zoomiesbr" target='_blank'> <FontAwesomeIcon size="lg" icon={faFacebookF} /> </a>
                    <a href="https://www.instagram.com/zoomiesbr/" target='_blank'> <FontAwesomeIcon size='lg' icon={faInstagram} /> </a>
                    <a href="https://www.youtube.com/channel/UCrpmqsDowU19j26UiIIlJfg" target='_blank'> <FontAwesomeIcon size='lg' icon={faYoutube} /> </a>
                    <a href="" target='_blank'> <svg className='fill-white ' strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg> </a>
                </div>

                <p>Copyright Ⓒ 2023 Zoomies.</p>

                <a href="https://www.bmouseproductions.com/" className='text-center' target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PPRODUCTIONS</strong> </a>
            </div>
        </footer>
    )
}