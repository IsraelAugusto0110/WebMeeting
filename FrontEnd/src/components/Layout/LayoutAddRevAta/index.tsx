import React from 'react';

import MenuBar from '../../MenuBar/MenuBarAddRevAta';
import Main from '../../Main/MainAddRevAta';

import { Container } from './styles';
/**Corrigir bug onde a pagina não entende quando passamos o mouse sobre os items do menu*/
const Layout: React.FC = () => {
    return (
        <Container>
           
           <MenuBar /> 
           
           <Main />

        </Container>
    );
}

export default Layout;