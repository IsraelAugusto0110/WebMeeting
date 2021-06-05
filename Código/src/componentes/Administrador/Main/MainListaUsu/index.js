//Configuração da parte da tela que carrega as tabela e as opções do menu


import React, { useState,  useEffect }  from 'react';
import { Container,  Table } from './styles';
import axios from 'axios';
//import { response } from 'express';

//import { Key } from 'readline';




import MaterialTable from 'material-table';

const MainLista = () => {
    const [usuarios, setUsuario] = useState([]);


  const empList=[
    {tableData: 1,id:1,nome:'Israel', email:'israel123@gmail.com', perfil:'Gerente'},
    {tableData:2 ,id:2,nome: 'Thiago',email:'thiago123@gmail.com', perfil:'Usuário'},
    {tableData:3,id:3,nome:'Natalia',email:'natalia435@gmail.com', perfil:'Administrador'},
    {tableData:4,id:4,nome:'Pedro', email:'henriquep35036@gmail.com', perfil:'Usuário'},
    {tableData:5,id:5,nome: 'João',email:'joão376@gmail.com', perfil:'Gerente'},
    {tableData:6,id:6,nome:'Marcos',email:'marcos987@gmail.com', perfil:'Administrador'},
    {tableData:7,id:7,nome:'Euclides', email:'euclas589@gmail.com', perfil:'Usuário'}
]

const [data, setData] = useState(empList)
const columns = [
  
    {
        title: 'ID', field:'id' ,
    },
    {
       title: 'Nome', field:'nome'
    },
    {
        title: 'Email', field:'email'
    },
    {
        title: 'Perfil', field:'perfil'
    }
]

const getUserData = async () => {
    try {
        const data = await axios.get(
            "http://localhost:3001/api/usuarios",
            {
                method: "GET",
                headers: { 'Content-Type': 'application/json'}
            }
        );
        //console.log(data.data);
       console.log(data.data)
       setUsuario(data.data)
    
    } catch (e) {
        console.log(e);
    }
};


useEffect(() => {
    getUserData();
  }, []);
    

    return(
        <Container>
          

        
          <Table>

        <div>
            
        <MaterialTable title ="Atas a serem aprovada"
         //sugestão usuario.data
         data={data}
         columns={columns}
         options={{
             paging: true,
             //Exportar para CSV//
             exportButton:true,

             actionsColumnIndex: -1, addRowPosition: "first"
         }}

              
    editable={{
      
        
      //função alterar usuario
  onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
          setTimeout((value) => {
            if(oldData){  
             
              const index = oldData.id;
              const dataUpdate = [...data];
              dataUpdate[index] = newData;
              
             setData([...dataUpdate]);
            
            }
              resolve(value);
          }, 1000);
      }),
      //função deletar usuario
  onRowDelete: oldData =>
      new Promise((resolve, reject) => {
          setTimeout((value) => {
              const dataDelete = [...data];
              const index = oldData.tableData;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve(value);
          }, 1000);
      })
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
        </Container>
        );
}

export default MainLista;



  