const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

const nz = {
      name: "New Zealand",
      population: 5_000_000,
      state: "Auckland",
      founded: "???",
      timezone: "New Zealand Standard Time",
    };

    for (let x in nz) {
        console.log(`${x} : ${nz[x]}`)
       // console.log(sydney[x])
        
    }
