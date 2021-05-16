import React from 'react';
import Cadastro from '../../images/Cadastro.png';
import Lista from '../../images/Lista.png';
import Cadastrar from '../../images/Cadastrar.png';
import Gerar from '../../images/Gerar.png';
import Adicionar from '../../images/Adicionar.png';
import Revisões from '../../images/Revisões.png';
import Monitorar from '../../images/Monitorar.png';
import Logout from '../../images/Logout.png';




import { Container,Topside,MenuButton,MenuButtonSair } from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
         <Topside>
            <h1>IACIT</h1>

            <MenuButton>
                <img src={Cadastro} alt=""/>
                <span>Cadastro de Usuário</span>
            </MenuButton>

            <MenuButton>
                <img src={Lista} alt=""/>
                <span>Lista de Usuários</span>
            </MenuButton>

            <MenuButton>
                <img src={Cadastrar} alt=""/>
                <span>Cadastrar Ata</span>
            </MenuButton>

            <MenuButton>
                <img src={Gerar} alt=""/>
                <span>Gerar Ata de Reunião</span>
            </MenuButton>

            <MenuButton>
                <img src={Adicionar} alt=""/>
                <span>Adicionar Revisão de Ata</span>
            </MenuButton>

            <MenuButton>
                <img src={Revisões} alt=""/>
                <span>Revisões da Ata</span>
            </MenuButton>

            <MenuButton>
                <img src={Monitorar} alt=""/>
                <span>Monitorar Ata de Reunião</span>
            </MenuButton>

            

            <MenuButtonSair>
                <line/>
                <img src={Logout} alt=""/>
                <span>Log out</span>
            </MenuButtonSair>



         </Topside>
      </Container>
  );
}

export default MenuBar;