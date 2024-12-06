import PrimarchList from "./PrimarchList";

function PrimarchRoster(){


return(

<>


      <h1>Primarchs</h1>
      {PrimarchList.map(primarch =>
        <div key={primarch.id}>
          <h2>{primarch.name}</h2>
          <p>{primarch.description}</p>
        </div>
      )}


so this shows.

but not the stupid roster.
</>

)

}

export default PrimarchRoster