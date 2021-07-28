let dataLand = {
    productivity: '',
    distanceLines: '',
    distancePlants: '',
    temperature: '',
    phosphor: '',
    potassium: '',
    deph: '',
    baseSaturation: '',
    ctc: '',
    PRNT: 70,
}

function getValue(variable, element) {
    dataLand[variable] = Number(element.value);
}


function calcarioCalculator(deph, baseSaturation, ctc, PRNT) {

    if (ctc > 10) { return ctc * deph * (40 - baseSaturation) / (20 * PRNT); }
    else if (ctc > 7) { return ctc * deph * (50 - baseSaturation) / (20 * PRNT); }
    else { return ctc * deph * (60 - baseSaturation) / (20 * PRNT); }

}

function eachPlant(qtdHectare, distanceLines, distancePlants, changeUnitValue) {
    return qtdHectare * changeUnitValue * distanceLines * distancePlants / (10000)
}
function calcario() {

    const NC = calcarioCalculator(dataLand.deph, dataLand.baseSaturation, dataLand.ctc, dataLand.PRNT).toFixed(2);
    const NCPlant = eachPlant(NC, dataLand.distanceLines, dataLand.distancePlants, 1000).toFixed(2)
    document.querySelector('.calcario.output-recommendation').innerHTML =
        `<div class='calcario output-recommendation-result'>
            <p>Correção nescessária:
            <ul>
                <li>Demanda por Hectare: ${NC}</li>
                </li>Demandao por Planta: ${NCPlant}</li>
            </ul>
        </div>`
}