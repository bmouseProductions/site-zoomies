import { ReactElement } from "react"
import { Link } from "react-router-dom";


interface botaoProps{
    children: ReactElement | string;
    page: string;
}

export default function Botao( {children, page}:botaoProps){
    return (
        <Link to={page} id='logoImg' className='w-auto '>
            <button className='bg-[#04083a] py-3 px-10 rounded-2xl hover:bg-red-600 transition-all text-white font-semibold'>
                {children}
            </button>
        </Link>
    )
}