import '../css/Navigation.css';

const TopBar = (props) => {

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

    const NavigationRender = (props) => {
        console.log(props.item.subItens);
        if (props.item.subItens === null) {
            return (
                <li className='navigation-item' key={props.id} id={props.id}>
                    <div className='navigation-icon'>
                        {props.item.icon}
                    </div>
                    <div className='navigation-label'>
                        {props.item.label}
                    </div>
                </li>
            )
        }

        return (
            <>

                <li className='navigation-item' key={props.id} id={props.id}>
                    <div className='navigation-icon'>
                        {props.item.icon}
                    </div>
                    <div className='navigation-label'>
                        {props.item.label}
                    </div>
                </li>
                <ul className='subitem-menu'>
                    {props.item.subItens.map((item, key) => <li key={key} className='subitem'>{item.label}</li>)}
                </ul>
            </>
        )
    }


    return (
        <div class="top-container">

            <header class="menu-superior">
                <h1>Insumos Agropecuários</h1>
            </header>


            <nav class="navegacao">
                <ul>
                    {navigation.map((item, key) => <NavigationRender key={key} id={key} item={item} />)}
                </ul>
            </nav>

        </div>
    );
}

export default TopBar;