import React from 'react'
import { useState , useEffect} from 'react'
import { db } from "../../firebase-config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import './declaration.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Declarations = () => {
    const [declarationList, setdeclarationList] = useState([]);
    const declarationCollectionRef = collection(db, "declaration");
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        const getdeclaraions = async () => {
          const data = await getDocs(declarationCollectionRef);
          setdeclarationList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getdeclaraions();
      }, []);
    
  return (
    <div className='declaration'>
        <div className='page--title centerElements' >Declarations of Delays</div>
      <div className='declaration--list'>
        {declarationList.map((item)=> { 
          return <>
          <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {item.title}
          </Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {item.chauffeur}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
            {/* <div className='declaration--list--item'>
             {item.text}
            </div> */}
            </>
          })}
      </div>
    </div>
  )
}

export default Declarations