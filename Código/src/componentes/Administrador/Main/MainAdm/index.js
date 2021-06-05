//Configuração da parte da tela que carrega as tabela e as opções do menu

import React from 'react';
import { Container, Header, ProfileInfo, Topside,MenuButton,MenuButtonSair } from './styles';
import { Link, BrowserRouter,Switch, Route,} from 'react-router-dom';
import Cadastro from '../../../images/Cadastro.png';
import Lista from '../../../images/Lista.png';
import Cadastrar from '../../../images/Cadastrar.png';
import Gerar from '../../../images/Gerar.png';
import Adicionar from '../../../images/Adicionar.png';
import Revisões from '../../../images/Revisões.png';
import Monitorar from '../../../images/Monitorar.png';
import Logout from '../../../images/Logout.png';
import MainUsu from '../MainCadUsuario';
import MainLista from '../MainListaUsu';
import MainCad from '../MainCadAta';
import MainGer from '../MainGerAta';
import MainAdd from '../MainAddRevAta';
import MainRev from '../MainRevAta';
import MainMo from '../MainMoAta';



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

             <Link to="/layoutUsu">
            <MenuButton>
                <img src={Cadastro} alt=""/>
                <span>Cadastro de Usuário</span>
            </MenuButton>
            </Link>

            <Link to="layoutLista">
            <MenuButton>
                <img src={Lista} alt=""/>
                <span>Lista de Usuários</span>
            </MenuButton>
            </Link>
            
            <Link to="layoutCad">
            <MenuButton>
                <img src={Cadastrar} alt=""/>
                <span>Cadastrar Ata</span>
            </MenuButton>
            </Link>

            <Link to="layoutGer">
            <MenuButton>
                <img src={Gerar} alt=""/>
                <span>Gerar Ata de Reunião</span>
            </MenuButton>
            </Link>

            <Link to="layoutAdd">
            <MenuButton>
                <img src={Adicionar} alt=""/>
                <span>Adicionar Revisão de Ata</span>
            </MenuButton>
            </Link>

            <Link to="layoutRev">
            <MenuButton>
                <img src={Revisões} alt=""/>
                <span>Revisões da Ata</span>
            </MenuButton>
            </Link>

            <Link to="layoutMo">
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
                path="/layoutUsu"
                exact={true}
                component={() => <MainUsu/>}
               />  

               <Route
                path="/layoutLista"
                exact={true}
                component={() => <MainLista/>}
               />  

               <Route
                path="/layoutCad"
                exact={true}
                component={() => <MainCad/>}
               />      

                <Route
                path="/layoutGer"
                exact={true}
                component={() => <MainGer/>}
               />    

                <Route
                path="/layoutGer"
                exact={true}
                component={() => <MainGer/>}
               />   

                <Route
                path="/layoutAdd"
                exact={true}
                component={() => <MainAdd/>}
               /> 

                <Route
                path="/layoutRev"
                exact={true}
                component={() => <MainRev/>}
               /> 

                <Route
                path="/layoutMo"
                exact={true}
                component={() => <MainMo/>}
               /> 

           
                
            </Switch>    
         
       
         
           
         </BrowserRouter>
        </Container>
    );
}

export default Main;