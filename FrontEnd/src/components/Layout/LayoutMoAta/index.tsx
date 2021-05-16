import React from 'react';

import MenuBar from '../../MenuBar/MenuBarMoAta';
import Main from '../../Main/MainMoAta';

import { Container } from './styles';
/**BUG: pagina nao responde quando passamos o mouse sobre o menu */
const Layout: React.FC = () => {
    return (
        <Container>
           
           <MenuBar /> 
           
           <Main />

        </Container>
    );
}

export default Layout;