import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Stack from '@mui/material/Stack';


import PrimarchList from "./PrimarchList"
import PrimarchImage from './PrimarchImage';

function PrimarchItem(){

//This is the avatars within the grid. To be exported to "PrimarchGrid"
//Will reference the following components: ""

const primarchItem = PrimarchList.map(primarch =>

<Card sx={{ position: 'left'}} key={primarch.id}>
    <CardActionArea>
      <img src={primarch.image} alt={primarch.name}/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"/>
          {primarch.name}
      </CardContent>
    </CardActionArea>
  </Card>

)

return (
    <Stack
    direction='column'
    spacing={{ xs: 1, sm: 2, md: 4 }}
    sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
  >
   {primarchItem}
  </Stack>
);

}

export default PrimarchItem