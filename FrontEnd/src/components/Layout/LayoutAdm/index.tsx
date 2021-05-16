import React from 'react';

import MenuBar from '../../MenuBar/MenuBarAdm';
import Main from '../../Main/MainAdm';


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