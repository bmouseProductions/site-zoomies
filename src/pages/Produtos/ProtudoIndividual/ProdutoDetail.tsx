


interface Produto {
    nome: string;
    imagem: string;
    descricao: string;
    composicao: string;
    doadores?: string;
    substitutos?: string;
    garantias?: string;
    linha: string;
}

interface ProductDetailProps {
    produto: Produto;
}


export default function ProdutoDetail({ produto }: ProductDetailProps){

    
    
    return (
        <>
            <section className="w-full px-5 md:px-[5%] lg:px-40 text-white">
                <div className="w-full flex flex-col ">
                    <h1 className="my-10 text-xl font-semibold"> Produtos / {produto.nome} </h1>
                    <div className="flex flex-col lg:flex-row justify-center">
                        <img className="w-full max-w-lg " src={produto.imagem} alt="" />
                        <div className="flex flex-col pt-10 gap-5">
                            <h1 className="text-3xl md:text-4xl mt-6 mb-2">{produto.nome}</h1>
                            <p className="max-w-[500px] ">
                                {produto.descricao}
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="mb-10 max-w-80% ">
                    <h2 className="text-3xl md:text-4xl mt-6 mb-5">Descrição</h2>
                    <div className="flex flex-col gap-2">
                        <p>
                            <strong className="text-lg font-bold">Composição: </strong>
                            {produto.composicao}
                        </p>

                        {produto.linha === 'bifinhos' && (
                            <div className="flex flex-col gap-2">
                                <p>
                                    <strong className="text-lg font-bold">Ingredientes transgênicos / Espécies doadoras do gene: </strong>
                                    {produto.doadores}
                                </p>
                                <p>
                                    <strong className="text-lg font-bold">Eventuais Subtitutos: </strong>
                                    {produto.substitutos}
                                </p>
                                <p>
                                    <strong className="text-lg font-bold">Níveis de garantia: </strong>
                                    {produto.garantias}
                                </p>
                            </div>
                        )}
                    </div>
                    
                </div>
                
            </section>
        </>
    )
}