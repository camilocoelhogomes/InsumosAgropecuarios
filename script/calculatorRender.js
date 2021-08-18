const APP = document.querySelector('main');

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
            >
        </li>`
        });
    }
    document.querySelector(`.calculator-input.${calculator}`).innerHTML = Inputs;
}



const renderMain = () => {
    APP.innerHTML = '';

    APP.innerHTML = `
        <header>
            <h2>Demanda de Macro Nutrientes</h2>
            <div onclick='haveNotSoloAnalisis(this)' class="output-solo-analisis">
            <ion-icon class='checkbox' name="checkbox"></ion-icon>
            <p>Não possuo analise de Solo</p>
            </div>
        </header>
        <div class="calculator">
            <ul class="calculator-input macro-nutrients">
            </ul>
            <div class="output">
            <div class="output-header">
                <button onclick='macroNutrientsCalculator()' class='recommendation-buttom'>Obter Recomendações</button>
            </div>
            <div class="macro-nutrients output-recommendation">
            </div>
            </div>
        </div>


        <header>
            <h2>Correção de Acidez</h2>
            <select onchange="getValue('PRNT',this)" name="seletor_corretor_de_acidez" class="seletor-corretor-de-acidez">
            <option value="70">Calcário Calcítico</option>
            <option value="70">Calcário Magnesiano</option>
            <option value="70">Calcário Dolomítico</option>
            <option value="120">Calcário Calcinado</option>
            <option value="160">Cal Virgem Dolomítica</option>
            <option value="140">Cal Virgem Agrícola</option>
            <option value="60">Escória Siderurgica</option>
            <option value="50">Cálcio silício ou Agrosilício</option>
            <option value="27">Serpentino-Silimag</option>
            </select>
        </header>
        <div class="calculator">
            <ul class="calculator-input calcario">
            <li class="calculator-input-line">
                <p>Profundidade</p>
                <input class='deph' onchange="getValue('deph',this)" type="number" step='0.01' placeholder="cm">
            </li>
            </ul>
            <div class="output">
            <div class="output-header">
                <button onclick="calcario()" class='recommendation-buttom'>Obter Recomendações</button>
            </div>
            <div class="calcario output-recommendation">
            </div>
            </div>
        </div>

    
    `
    renderCalculator(cultures[0].macroNutrients, 'macro-nutrients');
    renderCalculator(cultures[0].acidRegulator, 'calcario');
    window.addEventListener('resize', function () {
        renderCalculator(cultures[0].macroNutrients, 'macro-nutrients');
        renderCalculator(cultures[0].acidRegulator, 'calcario');
    }, true);
}

/*/
renderMain();
//*/

