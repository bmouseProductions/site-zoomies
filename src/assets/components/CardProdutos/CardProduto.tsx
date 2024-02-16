import { Link } from 'react-router-dom';

interface CardProps {
    link: string;
    image: string;
    name: string;
    styleExtra?: string;
}



export default function CardProduto( {link, image, name, styleExtra}:CardProps ){
    const style = "px-5 "
    return (
        <div className={style + styleExtra}>
            <Link to={link}>
                <div className='py-5 bg-[#0089cb] rounded-3xl'>
                    <img src={image} alt="" className='xl:w-[300px]  2xl:w-[400px] mx-auto' />
                </div>
                
                <h1 className='my-2 text-2xl font-bold text-center text-[#04083a]  min-h-[72px] '>{name}</h1>
            </Link>
        </div>
    )
}