import React from "react";
import "./declaration.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from '@mui/icons-material/Delete';
const Declarations = (props) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  props.declarationList.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }).sort(function(a, b) {
    return new Date(b.time) - new Date(a.time);
  });
  console.log(props.declarationList);
  return (
    
    <div className="declaration">
      <div className="page--title centerElements">Declarations of Delays</div>
      <div className="declaration--list">
        {
        props.declarationList.map((item) => {
          return (
            <div key={item.id} className="Accordion--Container">
              <Accordion
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ width: "25%", flexShrink: 0 }}>
                    {item.chauffeur}
                  </Typography>
                  <Typography sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}>
                    {item.date}
                  </Typography >
                  <Typography sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}>
                    {item.time}
                  </Typography >
                  <DeleteIcon className="editIcon" sx={{ width: "10%", flexShrink: 0 }} onClick={()=>{props.handleDelete(item.id)}} />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <div className="heigh"></div>
              {/* <div className='declaration--list--item'>
             {item.text}
            </div> */}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Declarations;
