import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Checked from '@mui/icons-material/CheckCircleOutline';
import NoChecked from '@mui/icons-material/HighlightOff';

import { ReactNode } from 'react';

function createData(
  diferencial: string | ReactNode,
  newAligner: ReactNode,
  maioria: ReactNode,
  outros: ReactNode,
) {
  return { diferencial, newAligner, maioria, outros};
}

const title1 = "Diferenciais";
const title2 = "Estilo de Vida";
const title3 = "Visual";
const title4 = "Higiene";

const rows = [
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
  createData(
    <p className='text-xl font-semibold'>{title2}</p>, 
    <></>,
    <></>,
    <></>
  ),
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
  createData(
    <p className='text-xl font-semibold'>{title3}</p>, 
    <></>, 
    <></>, 
    <></>
  ),
  createData(
    'Aspecto invisível', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
  createData(
    <p className='text-xl font-semibold'>{title4}</p>, 
    <></>, 
    <></>, 
    <></>
  ),
  createData(
    'Removível para escovar os dentes e usar fio dental', 
    <Checked className='!fill-[#0c47c2]' />, 
    <NoChecked className='!fill-red-600 opacity-30' />, 
    <NoChecked className='!fill-red-600 opacity-30' />
  ),
];


export default function TableDesktop() {
  return (
    <TableContainer component={Paper} className='max-w-[750px] lg:max-w-[1000px]  2xl:max-w-[1260px] m-auto !bg-[#e8e8e8] video'>
      <div className='!bg-[#e8e8e8] h-full w-full'>
        <h2 className=' lg:hidden pt-5 pb-3 text-4xl font-bold leading-[2.9rem] text-center text-[#326ef5] '>Por que escolher a  New Aligner?</h2>
      </div>
      
      <Table  aria-label="simple table">
        <TableHead className="sticky  !bg-[#e8e8e8] z-50">
          <TableRow>
            <TableCell>
              <div>
                <h2 className='hidden lg:block text-4xl font-bold leading-[2.9rem]  text-[#326ef5]'>Por que escolher a  New Aligner?</h2>
                <p className='text-xl font-semibold mt-10'>{title1}</p> 
              </div>
              </TableCell>
            <TableCell align="right" ><p className='text-xl font-semibold text-center text-[#326ef5]'>New ALigner</p></TableCell>
            <TableCell align="right" ><p className='text-xl font-semibold text-center text-[#326ef5] c'>Maioria dos alinhadores do mercado</p></TableCell>
            <TableCell align="right" ><p className='text-xl font-semibold text-center text-[#326ef5]'>Outros tipos de aparelhos no mercado</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-white !text-lg '>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                  {row.diferencial}
                </TableCell>
                <TableCell align="right" className='!text-center'>{row.newAligner}</TableCell>
                <TableCell align="right" className='!text-center'>{row.maioria}</TableCell>
                <TableCell align="right" className='!text-center'>{row.outros}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
