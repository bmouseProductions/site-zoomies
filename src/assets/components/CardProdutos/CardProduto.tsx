import { Link } from 'react-router-dom';

interface CardProps {
    link: string;
    image: string;
    name: string;
    styleExtra?: string;
}



export default function CardProduto( {link, image, name, styleExtra}:CardProps ){
    const style = "p-5 my-7 h-full hover:bg-[#00000020] backdrop-blur-md rounded-xl shadow-xl "
    return (
        <div className={style + styleExtra}>
            <Link to={link}>
                <img src={image} alt="" />
                <h1 className='my-2 text-2xl font-bold text-center text-[#e70000]  min-h-[72px] '>{name}</h1>
            </Link>
        </div>
    )
}