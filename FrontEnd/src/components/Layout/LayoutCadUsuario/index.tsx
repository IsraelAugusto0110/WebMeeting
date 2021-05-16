import React from 'react';

import MenuBar from '../../MenuBar/MenuBarCadUsuario';
import Main from '../../Main/MainCadUsuario';

import { Container } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
           
           <MenuBar /> 
           
           <Main />

        </Container>
    );
}

export default Layout;