let dataLand = {
    productivity: 0,
    distanceLines: 0,
    distancePlants: 0,
    temperature: 0,
    phosphor: 0,
    potassium: 0,
    deph: 0,
    baseSaturation: 0,
    ctc: 0,
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

function entriesTester(local, args) {
    const entries = document.querySelector(`.${local}`);
    let count = true;
    function addRedBorder(i) {
        entries.querySelector(`.${i}`).classList.add('red-border');
        count = false;
    }
    args.forEach(i =>
        dataLand[i] === 0 ?
            addRedBorder(i) :
            entries.querySelector(`.${i}`).classList.remove('red-border')
    );
    return count;
}
function eachPlant(qtdHectare, distanceLines, distancePlants, changeUnitValue) {
    return qtdHectare * changeUnitValue * distanceLines * distancePlants / (10000)
}
function calcario() {

    if (entriesTester('calcario', ['deph', 'baseSaturation', 'ctc', 'distanceLines', 'distancePlants'])) {
        const NC = calcarioCalculator(dataLand.deph, dataLand.baseSaturation, dataLand.ctc, dataLand.PRNT).toFixed(2);
        const NCPlant = eachPlant(NC, dataLand.distanceLines, dataLand.distancePlants, 1000).toFixed(2)
        document.querySelector('.calcario.output-recommendation').innerHTML =
            `<div class='calcario output-recommendation-result'>
                <p>Correção nescessária:</p>
                <ul>
                    <li>Demanda por Hectare: <strong>${NC}</strong> T/ha</li>
                    </li>Demandao por Planta: <strong>${NCPlant}</strong> kg/planta</li>
                </ul>
            </div>`
    }
    else {
        document.querySelector('.calcario.output-recommendation').innerHTML =
            `<div class='calcario output-recommendation-result'>
        <p>Preencha os dados em vermelho</p>
        </div>`
    }
}