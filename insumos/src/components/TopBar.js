const TopBar = () => {

    return (
        <nav class="top-container">

            <header class="menu-superior">


                <h1>Insumos Agropecuários</h1>

                <div class="navegacao">
                    <button onclick="renderMain()">Calculadora</button>
                    <button>Cotação</button>
                </div>
                <button>Entre</button>
            </header>
            <div class="margin"></div>

        </nav>
    );
}

export default TopBar;