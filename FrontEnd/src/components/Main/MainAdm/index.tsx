//Configuração da parte da tela que carrega as tabela e as opções do menu

import React from 'react';
import { Container, Header, ProfileInfo, Table } from './styles';


import MaterialTable from 'material-table';

const Main: React.FC = () => {
    const data=[
        {estado:'Assinada', data:'12/02/2021'},
        {estado: 'Enviada',data:'12/01/2021'},
        {estado:'Revisando',data:'30/03/2021'},
        {estado:'nova', data:'01/12/2020'}
    ]
 
    const columns=[
        {
           title: 'Estado', field:'estado'
        },
        {
            title: 'Data', field:'data'
        }
    ]
    
    return(
        <Container>
           <Header>
               <ProfileInfo>
                   <strong> Bem Vindo, Pedro!</strong>

                    <span>28/04/2016</span>
                    
       
               </ProfileInfo>
           </Header>

        
          <Table>

          <div>

         <MaterialTable title ="Ultimas Atas Geradas"
         data={data}
         columns={columns}
         options={{
             paging: false
             //Exportar para CSV//
             //exportButton:true//
         }}
         />
         </div>
          </Table>
           
           
         
           
        
        </Container>
    );
}

export default Main;