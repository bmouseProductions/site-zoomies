import { Tilt } from 'react-tilt'
import Lottie from 'react-lottie-player'
import paw from '../../assets/images/animations/paw.json'

import { AllProducts } from "../../compartilhado/Produtos"
import CardProduto from '../../assets/components/cardProdutos/CardProduto'
import Banner from '../../assets/components/banner/Banner'

import banner from '../../assets/images/banners/produtos.webp'
import Fornecedores from '../../assets/components/fornecedores/Fornecedores'


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    maxGlare:       .5,
}

export default function ProdutosPage(){
    return (
        <>
            <section>
                <Banner
                    imagem={banner}
                    title='Os melhores produtos '
                    text='Produtos de alta qualidade, em embalagens incríveis e, acima de tudo, muito saborosos para nossos pets.'
                    botao=''
                    styleExtra='mb-10 '
                />
            </section>

            <section className="max-w-[1276px] mx-auto px-5 mb-24 text-blackbg-home">
                <div className='mb-10 '>
                    <Lottie
                        play
                        loop
                        animationData={paw}
                        className='w-[150px] mx-auto rotate-45'
                    />
                    <h1 className='text-center text-5xl xl:text-6xl text-black '>
                        Produtos
                    </h1>
                </div>
                
                <div className='w-full mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-14 '>
                    {AllProducts.map( (produto, index) => (
                        <Tilt options={defaultOptions} key={index}>
                            <CardProduto 
                                link={`/produtos/${produto.nome.toLowerCase().replace(/\s+/g, '-')}`}
                                image= {produto.imagem} 
                                name= {produto.nome} 
                            />
                        </Tilt >
                    ))}
                    
                </div>
                
            </section>

            <Fornecedores />
        </>
    )
}