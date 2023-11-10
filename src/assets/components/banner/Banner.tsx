
import { Link } from 'react-router-dom';
import logo from '../../images/logoZoomies.webp'


interface propsBanner {
    imagem: string;
    title: string;
    text: string | null;
    botao: string | null;
    styleExtra: string | null;
}

export default function Banner( {imagem, title, text, styleExtra}:propsBanner ){
    const style = 'lg:px-[8%] lg:pb-10 xl:pb-20 md:pt-[104px] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 via-sky-400 via-[0%] md:via-10% to-[#04083a] md:to-70% '
    const style2= 'w-full max-w-3xl '
    
    return (
        <div className='relative '>
            <div className={style}>
                
                <Link to='/'>
                    <img src={logo} alt="" className='max-w-[400px] w-[80%] mx-auto py-10 md:hidden' />
                </Link>
                <div className='max-w-[1276px] w-full flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className='max-w-[500px] px-5 mb-20'>
                        <h1 className='text-4xl xl:text-6xl font-bold text-center lg:text-start text-white '>
                            {title}
                        </h1>
                        <p className="text-lg text-[#d3d3d3] text-center lg:text-start mt-7">
                            {text}
                        </p>

                        {/*<Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                            <button className=' py-3 px-10 mt-5 rounded-2xl bg-red-600 hover:bg-[#04083a] transition-all'>
                                {botao}
                            </button>
                        </Link>*/}
                    </div>

                    <div className={style2 + styleExtra} >
                        <img src={imagem} alt="" className=''/>
                    </div>
                    
                </div>
            </div>
            <div className='absolute z-30 w-full bottom-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,224C480,256,600,288,720,272C840,256,960,192,1080,160C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>  
            </div>
            
        </div>
    )
}