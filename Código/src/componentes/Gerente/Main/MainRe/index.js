//Configuração da parte da tela que carrega as tabela e as opções do menu

import React from 'react';
import { Container, Table } from './styles';


import MaterialTable from 'material-table';

const MainRe  = () => {
    const data=[
        {usuario:'Pedro', revisao:'------', ata:'12'},
        {usuario: 'Israel', revisao:'-------', ata:'3'},
        {usuario:'João', revisao:'-------', ata:'90'},
        {usuario:'Marcos', revisao:'---------', ata:'11'},
        {usuario: 'Euclides', revisao:'--------', ata:'20'},
        {usuario:'Sandro', revisao:'----------', ata: '23'},
        {usuario:'Natalia', revisao:'---------', ata: '8'}
    ]
 
    const columns=[
        {
           title: 'Usuario', field:'usuario'
        },
        {
            title: 'Revisão', field:'revisao'
        },
        {
            title: 'Ata', field:'ata'
        }
    ]
    
    return(
        <Container>
           

        
          <Table>

          <div>

         <MaterialTable title ="Relatorio"
         data={data}
         columns={columns}

             options={{
                paging: true,
                //Exportar para CSV//
                exportButton:true,
   
                actionsColumnIndex: -1, addRowPosition: "first"
            }}
         
         />
         </div>
          </Table>
           
           
         
           
        
        </Container>
    );
}

export default MainRe;