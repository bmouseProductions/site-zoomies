import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PropsAcordion {
    id: string;
    title: string;
    text: string;
    style:string;
}

export default function Acordion( {id, title, text, style}:PropsAcordion ) {
    return (
        <>
            <Accordion className={style}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={id}
                    id={id}
                    className='rounded'
                >
                    <Typography className='font-bold'><p className='font-bold'>{title}</p>  </Typography>
                </AccordionSummary>
                <AccordionDetails className='rounded'>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}