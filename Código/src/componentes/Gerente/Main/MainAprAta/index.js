//Configuração da parte da tela que carrega as tabela e as opções do menu


import React, {useState} from 'react';

import Input from '@material-ui/core/Input';

import { Container, ActionsAta,Table } from './styles';


import MaterialTable from 'material-table';

const MainApr = () => {
    
    


  const empList=[
    {tableData: 1,id:1,estado:'Enviada', data:'12/02/2020', pauta:'------'},
    {tableData:2 ,id:2,estado: 'Assinada',data:'12/02/2020', pauta:'------'},
    {tableData:3,id:3,estado:'Nova',data:'13/02/2021', pauta:'-------'},
    {tableData:4,id:4,estado:'Enviada', data:'14/09/2020', pauta:'-------'},
    {tableData:5,id:5,estado: 'Revisada',data:'31/01/2021', pauta:'--------'},
    {tableData:6,id:6,estado:'Revisada',data:'14/12/2020', pauta:'-------'},
    {tableData:7,id:7,estado:'Enviada', data:'14/12/2020', pauta:'--------'}
]

const [data] = useState(empList)
const columns = [
    {
        title: 'ID', field:'id'
    },
    {
       title: 'Estado', field:'estado'
    },
    {
        title: 'Data', field:'data'
    },
    {
        title: 'Pauta', field:'pauta'
    }
]



    return(
        <Container>
       
         
          <Table>

        <div>
        
        
        <MaterialTable title ="Atas a serem aprovada"
         data={data}
         columns={columns}
         options={{
             paging: true,
             //Exportar para CSV//
             exportButton:true,

             actionsColumnIndex: -1, addRowPosition: "first"
         }}

    
         
         actions={[
            {
              //função gerar a Ata
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, Data) => alert("Ata foi gerada com sucesso " )
            },
       
          ]}
         />
       </div>
       </Table>

        <ActionsAta>
             <div>
            <line></line>
            <Input defaultValue="ID"  />
             <button >Aprovar</button>
              
              <button >Detalhes</button>
              <label/>
             </div>
        </ActionsAta>

      
        </Container>
        );
}

export default MainApr;



  