


interface propsBanner {
    imagem: string;
    title: string;
    text: string | null;
}

export default function Banner( {imagem, title, text}:propsBanner ){
    return (
        <div className=' pt-[105px] md:pt-[104px] bg-[#f5a518] '>
            <div className=' w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='max-w-[500px] px-5'>
                    <h1 className='text-5xl lg:text-7xl font-bold text-white '>
                        {title}
                    </h1>
                    <p className="text-xl text-[#1E1E1E] mt-7">
                        {text}
                    </p>
                </div>

                <div className='max-w-3xl '>
                    <img src={imagem} alt="" />
                </div>
                
            </div>
        </div>
    )
}