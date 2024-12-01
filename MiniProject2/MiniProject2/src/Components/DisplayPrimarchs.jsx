import PrimarchsList from "./Primarchs";

function DisplayPrimarchs(){

return (

        <div>
      <h1>Primarchs</h1>
      {PrimarchsList.map(primarch =>
        <div key={primarch.id}>
          <h2>{primarch.name}</h2>
          <p>{primarch.description}</p>
        </div>
      )}
      </div>
)

}

export default DisplayPrimarchs