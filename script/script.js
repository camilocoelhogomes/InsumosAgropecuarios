let dataLand = {
    productivity: 0,
    distanceLines: 0,
    distancePlants: 0,
    temperature: 0,
    phosphor: 0,
    potassium: 0,
    soloAnalisys: false,
}

function getValue(variable, element) {
    dataLand[variable] = element.value;
}
