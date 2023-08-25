import { Tilt } from 'react-tilt'

import { AllProducts } from "../../compartilhado/Produtos"
import CardProduto from '../../assets/components/CardProdutos/CardProduto'

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
        <section className="w-full px-5 py-14 sm:px-14 xl:px-20 bg-home">
            <div className='mb-14 '>
                <h1 className='text-center text-6xl text-gradient font-bold'>
                    Produtos
                </h1>
            </div>
            
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-14 lg:gap-20'>
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
    )
}