//IMPORTAÇÕES ACCORDION
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Checked from '@mui/icons-material/CheckCircleOutline';
import NoChecked from '@mui/icons-material/HighlightOff';

function createData(
  diferencial: string | JSX.Element,
  newAligner: JSX.Element,
  maioria: JSX.Element,
  outros: JSX.Element,
) {
  return { diferencial, newAligner, maioria, outros};
}


const NA = 'New Aligner';
const Maioria  = 'Maioria dos alinhadores do mercado';
const Outros  = 'Outros tipos de aparelhos no mercado'



const rowsDiferenciais = [
  createData(
    'Tratamento mais rápido e previsível', 
    <Checked className='!fill-[#0c47c2]' />, 
    <Checked className='!fill-[#0c47c2] opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Monitoramento online remoto dos casos', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Suporte com Doutores', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Planejamento virtual elaborado com doutores', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Colaboração do paciente', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Entrega dos alinhadores em 15 dias', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Produto BPA Free', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
]

const rowsEstilo = [
  createData(
    'Facilmente removível para refeições',
    <Checked className='!fill-[#0c47c2]' />,
    <NoChecked className='!fill-red-600 opacity-30' />,
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Sem consultas de emergência para bráquetes e fios danificados',
    <Checked className='!fill-[#0c47c2]' />,
    <NoChecked className='!fill-red-600 opacity-30' />, <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    'Não atrapalha suas selfies', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
]

const rowsVisuais = [
  createData(
    'Aspecto invisível', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
]

const rowsHigiene = [
  createData(
    'Removível para escovar os dentes e usar fio dental', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
]

interface AccordionProps{
  title: string | JSX.Element;
  contentNA: JSX.Element;
  contentMaioria: JSX.Element;
  contentOutros: JSX.Element;
  id: string;
}

function BasicAccordion( {title, contentNA, contentMaioria, contentOutros, id}:AccordionProps ) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={id}
        >
          <Typography > <p className='font-bold'>{title}</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='flex flex-col'>
              <div className=''>
                <p>{NA}:</p>
                {contentNA}
              </div>

              <div className=''>
                <p>{Maioria}:</p>
                {contentMaioria}
              </div>

              <div className=''>
                <p>{Outros}:</p>
                {contentOutros}
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}


export default function BasicTable() {
  return (
    <section>
      
      <h1 className=' lg:hiddn pt-5 pb-3 text-4xl font-bold leading-[2.9rem] text-center text-gradient'>Por que escolher a  New Aligner?</h1>
      
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-semibold'>Diferenciais</h3>
          {rowsDiferenciais.map((row, index) => 
            <BasicAccordion 
              title={row.diferencial} 
              contentNA={row.newAligner} 
              contentMaioria={row.maioria}
              contentOutros={row.outros}
              id={index.toString()}
            />
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl font-semibold'>Estilo de Vida</h3>
          {rowsEstilo.map((row, index) => 
            <BasicAccordion 
              title={row.diferencial} 
              contentNA={row.newAligner} 
              contentMaioria={row.maioria}
              contentOutros={row.outros}
              id={index.toString()}
            />
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl font-semibold'>Visual</h3>
          {rowsVisuais.map((row, index) => 
            <BasicAccordion 
              title={row.diferencial} 
              contentNA={row.newAligner} 
              contentMaioria={row.maioria}
              contentOutros={row.outros}
              id={index.toString()}
            />
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl font-semibold'>Higiene</h3>
          {rowsHigiene.map((row, index) => 
            <BasicAccordion 
              title={row.diferencial} 
              contentNA={row.newAligner} 
              contentMaioria={row.maioria}
              contentOutros={row.outros}
              id={index.toString()}
            />
          )}
        </div>
        
      </div>
    </section>
  );
}
