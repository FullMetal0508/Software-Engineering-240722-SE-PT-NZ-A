import { useState, useEffect } from 'react';
import PrimarchBio from './PrimarchBio';


function PrimarchDisplay (){

//To be exported to App.jsx
//Will be called by selection of "PrimarchGrid" via PrimarchGrid

const [primarch, setPrimarch] = useState(null);
const [bio,setBio] = useState(null);

useEffect(() => {

let ignore = false;
setBio(null);
PrimarchBio(primarch).then(result => {
    if (!ignore) {
        setBio(result);
    }
})

})

}