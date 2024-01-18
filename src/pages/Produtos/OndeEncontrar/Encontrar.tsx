import { useState } from 'react';

import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';

import logo from '../../../assets/images/logoZoomies.webp'
import mapa from '../../../assets/images/animations/mapa3.json'


export default function Encontrar(){
    const style = 'lg:px-[8%] pb-12 lg:pb-10 xl:pb-20 lg:pt-[104px] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 via-sky-400 via-[0%] mlocalizacoes:via-10% to-[#04083a] mlocalizacoes:to-70% '
    const style2= 'w-full max-w-3xl '

    const  locais = [
        {
            estado:"Amazonas",
            cidades: {
                "Manaus" : {
                    localizacoes:"https://www.google.com/maps/d/u/3/embed?mid=1LROpxTId3koHKOaJGO_4zoAoDJntkZc&ehbc=2E312F&noprof=1"
                }
            }
        },
        
        {
            "estado": "Bahia",
            "cidades": {
            "Barreiras": {
                localizacoes: "url de localização"
            },
            "Lauro de Freitas": {
                localizacoes: "url de localização"
            }
            }
        },

        {
            "estado": "Minas Gerais",
            "cidades": {
                "Belo Horizonte": {
                    localizacoes: "url de localização",
                },
                "Bocauva": {
                    localizacoes: "url de localização"
                },
                "Brasilia de Minas": {
                    localizacoes: "url de localização"
                },
                "Cataguases": {
                    localizacoes: "url de localização"
                },
                "Janauba": {
                    localizacoes: "url de localização"
                },
                "Januaria": {
                    localizacoes: "url de localização"
                },
                "Juiz de Fora": {
                    localizacoes: "url de localização"
                },
                "Lambari": {
                    localizacoes: "url de localização"
                },
                "Martinho de Campos": {
                    localizacoes: "url de localização"
                },
                "Montes Claros": {
                    localizacoes: "url de localização"
                },
                "Ouro Preto": {
                    localizacoes: "url de localização"
                },
                "Para de Minas": {
                    localizacoes: "url de localização"
                },
                "Patos de Minas": {
                    localizacoes: "url de localização"
                },
                "Pirapora": {
                    localizacoes: "url de localização"
                },
                "Poços de Caldas": {
                    "ALEXANDRE VILLAS BOAS": "url de localização"
                },
                "Ponte Nova": {
                    localizacoes: "url de localização"
                },
                "Santa Luzia": {
                    localizacoes: "url de localização"
                },
                "São Gonçalo do Sapucai": {
                    localizacoes: "url de localização"
                },
                "Três Corações": {
                    localizacoes: "url de localização"
                },
                "Uberaba": {
                    localizacoes: "url de localização"
                },
                "Uberlândia": {
                    localizacoes: "url de localização"
                },
                "Unai": {
                    localizacoes: "url de localização"
                },
                "Visconde do Rio Branco": {
                    localizacoes: "url de localização"
                }
            }
        },

        {
            "estado": "Paraná",
            "cidades": {
                "Curitiba": {
                    localizacoes: "url de localização",
                }
            }
        },

        {
            "estado": "Rio Grande do Sul",
            "cidades": {
                "Eldourado do Sul": {
                    localizacoes: "url de localização"
                },
                "Porto Alegre": {
                    localizacoes: "url de localização",
                },
                "Viamão": {
                    localizacoes: "url de localização"
                }
            }
        },

        {
            "estado": "Santa Catarina",
            "cidades": {
                "Gaspar": {
                    localizacoes: "url de localização"
                }
            }
        },

        {
            "estado": "São Paulo",
            "cidades": {
                "Águas de Lindoia": {
                    localizacoes: "url de localização"
                },
                "Amparo": {
                    localizacoes: "url de localização",
                },
                "CAMPINAS": {
                    localizacoes: "url de localização",
                },
                "CARAPICUIBA": {
                    localizacoes: "url de localização"
                },
                "EMBU DAS ARTES": {
                    localizacoes: "url de localização"
                },
                "INDAIATUBA": {
                    localizacoes: "url de localização"
                },
                "ITAI": {
                    localizacoes: "url de localização"
                },
                "JUNDIAI": {
                    localizacoes: "url de localização"
                },
                "PRAIA GRANDE": {
                    localizacoes: "url de localização"
                },
                "PRESIDENTE PRUDENTE": {
                    localizacoes: "url de localização"
                },
                "SAO CARLOS": {
                    localizacoes: "url de localização"
                },
                "SAO PAULO": {
                    localizacoes: "url de localização",
                },
                "SAO ROQUE": {
                    localizacoes: "url de localização"
                },
                "SUMARE": {
                    localizacoes: "url de localização"
                },
                "VINHEDO": {
                    localizacoes: "url de localização",
                }
            }
        }
    ]

    const iframe = document.querySelector('#maps') as HTMLIFrameElement;
    console.log(iframe);
    setTimeout( () => {console.log(iframe)}, 15000)

    if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
        
        if (iframeDocument) {
            const header = iframeDocument.querySelector('.i4ewOd-pzNkMb-haAclf');
            console.log(header);
        }
    }

    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    const cidadesDoEstadoSelecionado = estadoSelecionado
    ? Object.keys(locais.find((local) => local.estado === estadoSelecionado)?.cidades || {})
    : [];

    const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novoEstadoSelecionado = e.target.value;
        setEstadoSelecionado(novoEstadoSelecionado);
        // Limpar a cidade selecionada quando o estado é alterado
        setCidadeSelecionada('');
    };

    const handleCidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novaCidadeSelecionada = e.target.value;
        setCidadeSelecionada(novaCidadeSelecionada);
    };

    return (
        <>
            {/*BANNER*/}
            <div className='relative'>
                <div className={style}>
                    
                    <Link to='/'>
                        <img src={logo} alt="url de localização" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                    </Link>
                    <div className='max-w-[1276px] w-full flex flex-col-reverse lg:flex-row justify-center items-center'>
                        <div className='max-w-[500px] px-5 mlocalizacoes:mb-24 lg:mb-20'>
                            <h1 className='text-4xl xl:text-6xl font-bold text-center lg:text-start text-white '>
                                Onde Encontrar
                            </h1>
                            <p className="text-lg text-[#d3d3d3] text-center lg:text-start mt-7">
                                Saiba onde encontrar os produtos da marca mais deliciosa do Brasi!!
                            </p>

                            {/*<Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                                <button className=' py-3 px-10 mt-5 rounded-2xl bg-red-600 hover:bg-[#04083a] transition-all'>
                                    {botao}
                                </button>
                            </Link>*/}
                        </div>

                        <div className={style2} >
                            <Lottie
                                play
                                loop
                                animationData={mapa}
                                className='w-[80%] mx-auto'
                            />
                        </div>
                        
                    </div>
                </div>
                <div className=' absolute z-30 w-full bottom-0 bg-gradient-to-b from-transparent from-[90%] to-[#fff] to-[90%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,224C480,256,600,288,720,272C840,256,960,192,1080,160C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>  
                </div>
                
            </div>

            <div className='container mx-auto flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col gap-7'>
                    <div className='w-full'>
                        <p>Aqui voce poderá encontrar os pontos de vendas Zoomies ques estão distribuídos ao redor do brasil,
                            selecione os campos para encontrar o ponto mais próximo de você.
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-5'>
                        {/* Select para escolher o estado */}
                        <select 
                            value={estadoSelecionado} 
                            onChange={handleEstadoChange}
                            className='p-1 bg-gray-300 rounded'
                        >
                            <option value="" disabled>
                            Selecione um estado:
                            </option>
                            {locais.map((local) => (
                            <option key={local.estado} value={local.estado}>
                                {local.estado}
                            </option>
                            ))}
                        </select>

                        {/* Select para escolher a cidade com base no estado selecionado */}
                        <select 
                            value={cidadeSelecionada} 
                            onChange={handleCidadeChange} 
                            disabled={!estadoSelecionado}
                            className='p-1 bg-gray-300 rounded'
                        >
                            <option value="" disabled>
                            Selecione uma cidade:
                            </option>
                            {cidadesDoEstadoSelecionado.map((cidade) => (
                            <option key={cidade} value={cidade}>
                                {cidade}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <div className='w-[500px] h-[300px] bg-sky-600 '>
                        <iframe
                            id='maps'
                            className='w-full h-full'
                            src=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}