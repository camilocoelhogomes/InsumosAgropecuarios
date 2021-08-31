import React, { useState } from "react";
import { Switch } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import './css/App.css';


import Calculator from './components/Calculator'
function App() {
	const [navigation, setNavigation] = useState([
		{
			label: 'Tela Inicial',
			icon: <ion-icon name="home-outline"></ion-icon>,
			subItens: null,
		},
		{
			label: 'Calculadoras',
			icon: <ion-icon name="calculator-outline"></ion-icon>,
			config: { hasSoloAnalisys: true },
			subItens: [
				{
					label: 'Macro Nutrientes',
					inputs: {
						productivity: {
							value: 35,
							unit: 'sc/ha',
							label: 'Produtividade Esperada'
						},
						distanceLines: {
							value: 3,
							unit: 'm',
							label: 'Distância entre Linhas'
						},
						distancePlants: {
							value: 1,
							unit: 'm',
							label: 'Distância entre Plantas'
						},
						temperature: {
							value: 20,
							unit: 'ºC',
							label: 'Temperatura média anual'
						},
						phosphor: {
							value: 8,
							unit: 'P mg/dm³',
							label: 'Fósforo'
						},
						potassium: {
							value: 80,
							unit: 'K mg/dm³',
							label: 'Potássio'
						},
					},
				},
				{ label: 'Correção de Acidez' },
				{ label: 'Micro Nutrientes' },
			],
		},
		{
			label: 'Cotações',
			icon: <div className='money-icon'>$</div>,
			subItens: null,
		},
		{
			label: 'Loja',
			icon: <ion-icon name="storefront-outline"></ion-icon>,
			subItens: null,
		}
	])

	const theme = createTheme({
		palette: {
			secondary: {
				main: '#FE9001'
			}
		}
	});

	const hasSoloAnalisys = () => {
		const userNavigation = [...navigation]
		userNavigation[1].config.hasSoloAnalisys = !userNavigation[1].config.hasSoloAnalisys;
		setNavigation(userNavigation);
	}

	const changeInput = (value, name) => {
		const userNavigation = [...navigation];
		userNavigation[1].subItens[0].inputs[name].value = Number(value);
		setNavigation(userNavigation);
	}

	const decInput = (name) => {
		const userNavigation = [...navigation];
		let step = 0;
		if (name === 'productivity') { step = 5 }
		if (name === 'distanceLines') { step = 0.5 }
		if (name === 'distancePlants') { step = 0.1 }
		if (name === 'temperature') { step = 1 }
		if (name === 'phosphor') { step = 1 }
		if (name === 'potassium') { step = 10 }
		userNavigation[1].subItens[0].inputs[name].value -= step;
		setNavigation(userNavigation);
	}

	const accInput = (name) => {
		const userNavigation = [...navigation];
		let step = 0;
		if (name === 'productivity') { step = 5 }
		if (name === 'distanceLines') { step = 0.5 }
		if (name === 'distancePlants') { step = 0.1 }
		if (name === 'temperature') { step = 1 }
		if (name === 'phosphor') { step = 1 }
		if (name === 'potassium') { step = 10 }

		userNavigation[1].subItens[0].inputs[name].value += step;
		setNavigation(userNavigation);
	}

	return (
		<div className='root'>
			<MuiThemeProvider theme={theme}>
				<h1 className='title'>Simulador</h1>
				<div className='solo-analisys'>
					<p className='solo-analisys-label'>Possuo analise de solo</p>
					<Switch
						color="secondary"
						checked={navigation[1].config.hasSoloAnalisys}
						onChange={hasSoloAnalisys}
					/>
				</div>
				<ul className='calculator-navigation'>
					<li className='calculator-navigation-item'>Macro Nutrientes</li>
				</ul>
				<Calculator
					navigation={navigation}
					changeInput={changeInput}
					decInput={decInput}
					accInput={accInput}
				/>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
