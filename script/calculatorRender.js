const cultures = [
    {
        culture: 'coffee',
        soloAnalisys: true,
        macroNutrients: {
            productivity: {
                value: '',
                unit: 'sc/ha',
                label: 'Produtividade Esperada'
            },
            distanceLines: {
                value: '',
                unit: 'm',
                label: 'Distância entre Linhas'
            },
            distancePlants: {
                value: '',
                unit: 'm',
                label: 'Distância entre Plantas'
            },
            temperature: {
                value: '',
                unit: 'ºC',
                label: 'Temperatura média anual'
            },
            phosphor: {
                value: '',
                unit: 'P mg/dm³',
                label: 'Fósforo'
            },
            potassium: {
                value: '',
                unit: 'K mg/dm³',
                label: 'Potássio'
            },
        },
        acidRegulator: {
            deph: {
                value: '',
                unit: 'cm',
                label: 'Profundidade'
            },
            baseSaturation: {
                value: '',
                unit: '%',
                label: 'Saturação de Base'
            },
            ctc: {
                value: '',
                unit: 'T',
                label: 'C.T.C.'
            },
            distanceLines: {
                value: '',
                unit: 'm',
                label: 'Distância entre Linhas'
            },
            distancePlants: {
                value: '',
                unit: 'm',
                label: 'Distância entre Plantas'
            },
        }
    }
]

function renderCalculator(info, calculator) {
    let Inputs = '';
    if (window.matchMedia('(max-width: 700px)').matches) {
        Object.keys(info).forEach(item => {
            Inputs += `    
        <li class="calculator-input-line ${calculator}">
            <input 
            class="${item}" 
            onchange="getValue('${item}',this)" 
            type="number" 
            step='0.01'
            placeholder="${info[item].label} (${info[item].unit})"
            value="${info[item].value}"
            >
        </li>`
        });
    } else {
        Object.keys(info).forEach(item => {
            Inputs += `    
        <li class="calculator-input-line">
            <p>${info[item].label}</p>
            <input 
            class="${item}" 
            onchange="getValue('${item}',this)" 
            type="number" 
            step='0.01'
            placeholder="${info[item].unit}"
            value="${info[item].value}">
        </li>`
        });
    }
    document.querySelector(`.calculator-input.${calculator}`).innerHTML = Inputs;
}

renderCalculator(cultures[0].macroNutrients, 'macro-nutrients');
renderCalculator(cultures[0].acidRegulator, 'calcario');

window.addEventListener('resize', function () {
    renderCalculator(cultures[0].macroNutrients, 'macro-nutrients');
    renderCalculator(cultures[0].acidRegulator, 'calcario');
}, true);
