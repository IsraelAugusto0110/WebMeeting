import React from 'react';

import MenuBar from '../../MenuBar/MenuBarListaUsu';
import Main from '../../Main/MainListaUsu';


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