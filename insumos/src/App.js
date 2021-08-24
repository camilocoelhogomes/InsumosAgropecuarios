import Calculator from "./components/Calculator";

function App() {
  const navigation = [
    {
      label: 'Tela Inicial',
      icon: <ion-icon name="home-outline"></ion-icon>,
      subItens: null,
    },
    {
      label: 'Calculadoras',
      icon: <ion-icon name="calculator-outline"></ion-icon>,
      subItens: [
        { label: 'Macro Nutrientes' },
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
  ]

  return (
    <>
      <Calculator calculators={navigation[1].subItens} />
    </>
  );
}

export default App;
