import PrimarchsList from "./Primarchs";

function PrimarchProfile(){

    return (
      <div>
        <h1>Primarchs</h1>
        {PrimarchsList.map((primarch) => (
          <div key={primarch.id}>
            <img>{primarch.image}</img>
          </div>
        ))}
      </div>
    );

}

export default PrimarchProfile