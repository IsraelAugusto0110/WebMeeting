import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

/**Tela de revisao ata */
import LayoutAddRevAta from './components/Layout/LayoutAddRevAta';

/**Tela de administrador */
import LayoutAdmin from './components/Layout/LayoutAdm';

/**Tela de cadastro nova ata */
import LayoutCadAta from './components/Layout/LayoutCadAta';

/**Tela de cadastro usuario */
import LayoutCadUser from './components/Layout/LayoutCadUsuario';

/**Tela de gerar ata */
import LayoutGerAta from './components/Layout/LayoutGerAta';

/**Tela de listar usuarios */
import LayoutListaUser from './components/Layout/LayoutListaUsu';

/**Tela de login */
import LayoutLogin from './components/Layout/LayoutLogin';

/**Tela de modelo ata */
import LayoutMoAta from './components/Layout/LayoutMoAta';

/**Tela de modelo ata */
import LayoutRevAta from './components/Layout/LayoutRevAta';


function Router() {
    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route path="/"
                        exact={true}
                        component={() => (
                            < LayoutLogin />
                        )} />
                    <Route path="/adm"
                        exact={true}
                        component={() => (
                            < LayoutAdmin />
                        )} />
                    <Route path="/newuser"
                        exact={true}
                        component={() => (
                            < LayoutCadUser />
                        )} />
                    <Route path="/newata"
                        exact={true}
                        component={() => (
                            < LayoutCadAta />
                        )} />
                    <Route path="/revata"
                        exact={true}
                        component={() => (
                            < LayoutAddRevAta />
                        )} />
                    <Route path="/gerata"
                        exact={true}
                        component={() => (
                            < LayoutGerAta />
                        )} />
                    <Route path="/users"
                        exact={true}
                        component={() => (
                            < LayoutListaUser />
                        )} />
                    <Route path="/moata"
                        exact={true}
                        component={() => (
                            < LayoutMoAta />
                        )} />
                    <Route path="/rev"
                        exact={true}
                        component={() => (
                            < LayoutRevAta />
                        )} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Router;