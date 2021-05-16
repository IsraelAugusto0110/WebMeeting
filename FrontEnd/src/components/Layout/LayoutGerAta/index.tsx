import React from 'react';

import MenuBar from '../../MenuBar/MenuBarGerAta';
import Main from '../../Main/MainGerAta';


import { Container } from './styles';
/**Pagina nao responde quando passamos o mouse sobre o menu */
const Layout: React.FC = () => {
    return (
        <Container>
           
           <MenuBar /> 
           
           <Main />

        </Container>
    );
}

export default Layout;