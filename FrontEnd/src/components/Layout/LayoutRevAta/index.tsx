import React from 'react';

import MenuBar from '../../MenuBar/MenuBarRevAta';
import Main from '../../Main/MainRevAta';

import { Container } from './styles';
/**BUG: Pagina nao responde quando passamos o mouse sobre o menu */
const Layout: React.FC = () => {
    return (
        <Container>
           
           <MenuBar /> 
           
           <Main />

        </Container>
    );
}

export default Layout;