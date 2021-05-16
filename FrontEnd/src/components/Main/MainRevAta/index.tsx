//Configuração da parte da tela que carrega as tabela e as opções do menu


import React, {useState} from 'react';
import { Container,  Table , ActionsAta} from './styles';
import Input from '@material-ui/core/Input';

import MaterialTable from 'material-table';

const Main: React.FC = () => {
    
    


  const empList=[
    {tableData: 1,id:1,responsavel:'Pedro', assunto:'-------', prazo:'12/02/2021'},
    {tableData:2 ,id:2,responsavel: 'Thiago',assunto:'-------', prazo:'12/03/2021'},
    {tableData:3,id:3,responsavel:'Euclides',assunto:'--------', prazo:'12/08/2021'},
    {tableData:4,id:4,responsavel:'João', assunto:'-------', prazo:'11/02/2021'},
    {tableData:5,id:5,responsavel: 'Natalia',assunto:'--------', prazo:'30/08/2020'},
    {tableData:6,id:6,responsavel:'Marcos',assunto:'--------', prazo:'27/06/2021'},
    {tableData:7,id:7,responsavel:'Sandro', assunto:'--------', prazo:'25/05/2021'}
]

const [data] = useState(empList)
const columns = [
    {
        title: 'ID', field:'id'
    },
    {
       title: 'Responsavel', field:'responsavel'
    },
    {
        title: 'Assunto', field:'assunto'
    },
    {
        title: 'Prazo', field:'prazo'
    }
]



    return(
        <Container>
          
          <Table>

        <div>
        
        
        <MaterialTable title ="Atas e seus Estados"
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
             <button >Excluir</button>
              
              <button >Editar</button>
              <label/>
             </div>
        </ActionsAta>

      
        </Container>
        );
}

export default Main;



  