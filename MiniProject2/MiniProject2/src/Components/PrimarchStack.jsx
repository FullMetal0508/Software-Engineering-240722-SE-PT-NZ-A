import * as React from 'react';
import Stack from '@mui/material/Stack';

import PrimarchItem from './PrimarchItem';

function PrimarchStack(){

//This will hold the avatars/profiles of each primarch as a list down the left side.


return (

    <Stack direction="column" spacing={2} width={"20%"} sx={{justifyContent: "flex-start", alignContent:"flex-start"}}>
    <PrimarchItem>{PrimarchItem}</PrimarchItem>
    </Stack>
);


}

export default PrimarchStack