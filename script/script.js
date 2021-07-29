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
const npkSaca = {
    nitrogen: [6.2, 6.2],
    phosphor: [0.6, 0.6],
    potassium: [5.9, 5.9],
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
function temperatureAdjuste(npkNeeded) {
    if (dataLand.temperature < 19) {
        npkNeeded.nitrogen = [npkNeeded.nitrogen[0] -= 0.15 * npkSaca.nitrogen[0], npkNeeded.nitrogen[1] -= 0.1 * npkSaca.nitrogen[1]]
    }
    else if (dataLand.temperature > 22) {
        npkNeeded.nitrogen = [npkNeeded.nitrogen[0] += 0.15 * npkSaca.nitrogen[0], npkNeeded.nitrogen[1] += 0.2 * npkSaca.nitrogen[1]]
    }
    return npkNeeded;
}

function plantsDensityAdjuste(npkNeeded) {
    let plantDensity = 10000 / (dataLand.distanceLines * dataLand.distancePlants);
    if (plantDensity > 6000) {
        Object.keys(npkNeeded).forEach(item => npkNeeded[item] = [npkNeeded[item][0] -= 0.25 * npkSaca[item][0], npkNeeded[item][1] -= 0.2 * npkSaca[item][1]])
    }
    return npkNeeded;
}

function phosphorAdjuste(npkNeeded) {
    if (dataLand.phosphor < 10) {
        npkNeeded.phosphor = [npkNeeded.phosphor[0], npkNeeded.phosphor[1]]
    }
    else if (dataLand.phosphor < 20) {
        npkNeeded.phosphor = [npkNeeded.phosphor[0] -= 0.5 * npkSaca.phosphor[0], npkNeeded.phosphor[1] -= 0.5 * npkSaca.phosphor[1]]
    }
    else {
        npkNeeded.phosphor = [0, 0];
    }
    return npkNeeded;
}

function potassiumAdjuste(npkNeeded) {
    if (dataLand.potassium < 60) {
        npkNeeded.potassium = [npkNeeded.potassium[0] += 0.2 * npkSaca.potassium[0], npkNeeded.potassium[1] += 0.3 * npkSaca.potassium[1]]
    }
    else if (dataLand.potassium < 110) {
        npkNeeded.potassium = [npkNeeded.potassium[0], npkNeeded.potassium[1]]
    }
    else if (dataLand.potassium < 160) {
        npkNeeded.potassium = [npkNeeded.potassium[0] -= (2 / 3) * npkSaca.potassium[0], npkNeeded.potassium[1] -= (2 / 3) * npkSaca.potassium[1]]
    }
    else {
        npkNeeded.potassium = [0, 0];
    }
    return npkNeeded;
}

function productivityAdjuste(npkNeeded) {
    Object.keys(npkNeeded).forEach(item => npkNeeded[item] = [npkNeeded[item][0] * dataLand.productivity, npkNeeded[item][1] * dataLand.productivity]);
    return npkNeeded;
}

function macroNutrientsCalculator() {
    if (entriesTester('macro-nutrients', ['productivity', 'distanceLines', 'distancePlants', 'temperature', 'phosphor', 'potassium'])) {
        let npkNeeded = {
            nitrogen: [6.2, 6.2],
            phosphor: [0.6, 0.6],
            potassium: [5.9, 5.9],
        };
        npkNeeded = temperatureAdjuste(npkNeeded);
        npkNeeded = plantsDensityAdjuste(npkNeeded)
        npkNeeded = phosphorAdjuste(npkNeeded);
        npkNeeded = potassiumAdjuste(npkNeeded);
        npkNeeded = productivityAdjuste(npkNeeded);

        document.querySelector('.macro-nutrients.output-recommendation').innerHTML =
            `<div class='macro-nutrients output-recommendation-result'>
                <p>Correção nescessária:</p>
                <ul>
                    <li>Demanda por Nitrogênio: <strong>${npkNeeded.nitrogen[0]} - ${npkNeeded.nitrogen[1]}</strong> kG/ha</li>
                    <li>Demanda por Fósforo: <strong>${npkNeeded.phosphor[0]} - ${npkNeeded.phosphor[1]}</strong> kG/ha</li>
                    <li>Demanda por Potássio: <strong>${npkNeeded.potassium[0]} - ${npkNeeded.potassium[1]}</strong> kG/ha</li>
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