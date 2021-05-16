import React from 'react';

import MenuBar from '../../MenuBar/MenuBarCadAta';
import Main from '../../Main/MainCadAta';


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