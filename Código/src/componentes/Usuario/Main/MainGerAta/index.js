//Configuração da parte da tela que carrega as tabela e as opções do menu


import React, {useState} from 'react';
import { Container,  Table , ActionsAta} from './styles';
import Input from '@material-ui/core/Input';

import MaterialTable from 'material-table';

const MainGer = () => {
    
    


  const empList=[
    {tableData: 1,id:1,estado:'Enviada', data:'12/02/2020', prazo:'12/02/2021'},
    {tableData:2 ,id:2,estado: 'Assinada',data:'12/02/2020', prazo:'12/03/2021'},
    {tableData:3,id:3,estado:'Nova',data:'13/02/2021', prazo:'12/08/2021'},
    {tableData:4,id:4,estado:'Enviada', data:'14/09/2020', prazo:'11/02/2021'},
    {tableData:5,id:5,estado: 'Revisada',data:'31/01/2021', prazo:'30/08/2020'},
    {tableData:6,id:6,estado:'Revisada',data:'14/12/2020', prazo:'27/06/2021'},
    {tableData:7,id:7,estado:'Enviada', data:'14/12/2020', prazo:'25/05/2021'}
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
        title: 'Prazo', field:'prazo'
    }
]



    return(
        <Container>
          
          <Table>

        <div>
        
        
        <MaterialTable title ="Atas a Serem Geradas"
         data={data}
         columns={columns}
         options={{
             paging: true,
             //Exportar para CSV//
             //exportButton:true//

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
             <Input defaultValue="ID"  />
             <button >Gerar Ata</button>
              
              <button >Detalhes</button>

             </div>
        </ActionsAta>

      
        </Container>
        );
}

export default MainGer;



  