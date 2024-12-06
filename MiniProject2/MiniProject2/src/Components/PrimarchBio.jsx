import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrimarchList from "./PrimarchList";



function PrimarchBio(){

    const primarchBio = PrimarchList.map(primarchBio =>
<div>
        <Card>
          <img src={primarchBio.image} alt={primarchBio.name}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {primarchBio.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {primarchBio.description}
            </Typography>
          </CardContent>
        </Card>

        
        <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>   
        
        )

return(

    <div> {primarchBio} </div>
    
)

}

export default PrimarchBio