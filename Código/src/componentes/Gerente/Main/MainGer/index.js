//Configuração da parte da tela que carrega as tabela e as opções do menu

import React from 'react';
import { Container, Header, ProfileInfo, Topside,MenuButton,MenuButtonSair } from './styles';
import Cadastrar from '../../../images/Cadastrar.png';
import Gerar from '../../../images/Gerar.png';
import Monitorar from '../../../images/Monitorar.png';
import Logout from '../../../images/Logout.png';
import { Link, BrowserRouter,Switch, Route,} from 'react-router-dom';
import MainApr from '../MainAprAta'
import MainMo from '../MainMoAta'
import MainRe from '../MainRe';




const Main = () => {
  
    
    return(
        <Container>
        <BrowserRouter>
           <Header>
               <ProfileInfo>
                   <strong> Bem Vindo, Pedro!</strong>

                    <span>28/04/2016</span>
                    
       
               </ProfileInfo>
           </Header>

           <Topside>
            <h1>IACIT</h1>

            <Link to="/layoutRe">
            <MenuButton>
                <img src={Cadastrar} alt=""/>
                <span>Relatorio</span>
            </MenuButton>
            </Link>

            <Link to="/layoutAprAta">
            <MenuButton>
                <img src={Gerar} alt=""/>
                <span>Aprovar Ata</span>
            </MenuButton>
            </Link>

            <Link to="/layoutMoAta">
            <MenuButton>
                <img src={Monitorar} alt=""/>
                <span>Monitorar Ata de Reunião</span>
            </MenuButton>
            </Link>
            
           
            <MenuButtonSair>
                <line/>
                <img src={Logout} alt=""/>
                <span>Log out</span>
            </MenuButtonSair>
         

           </Topside>

         
          <Switch>
               <Route
                path="/layoutAprAta"
                exact={true}
                component={() => <MainApr/>}
               
               
               />    

              <Route
                path="/layoutMoAta"
                exact={true}
                component={() => <MainMo/>}
               
               
               />    

               
              <Route
                path="/layoutRe"
                exact={true}
                component={() => <MainRe/>}
               
               
               />

           
                
            </Switch>    
         
           
            </BrowserRouter>
        </Container>
    );
}

export default Main;