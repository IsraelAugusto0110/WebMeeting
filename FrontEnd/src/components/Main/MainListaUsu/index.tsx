//Configuração da parte da tela que carrega as tabela e as opções do menu

import React, { useState, PureComponent } from 'react';
import { Container, Table } from './styles';


import MaterialTable from 'material-table';
import { isConstructorTypeNode } from 'typescript';
import { response } from 'express';

const Main: React.FC = () => {


    /**Tenta buscar os usuarios no bd */
    async function getUsers() {
        try {
            const response = await fetch('http://localhost:3001/', {
                mode: 'no-cors',
                method: "get",
                headers: {
                     "Content-Type": "application/json"
                },
                //body: JSON.stringify({response}),
     });
            console.log(response);
            const data = await response.json();
            console.log(data);
            show(data);
        } catch (error) {
            console.error(error);
        }

    }

    getUsers();

    function show(users) {

        let output = '';

        for (let user of users) {
            output += `<li>${user.nome}</li>`
        }

        document.querySelector('main').innerHTML = output;
    }


    const empList = [
        { tableData: 1, id: 1, nome: 'Israel', email: 'israel123@gmail.com', perfil: 'Gerente' },
        { tableData: 2, id: 2, nome: 'Thiago', email: 'thiago123@gmail.com', perfil: 'Usuário' },
        { tableData: 3, id: 3, nome: 'Natalia', email: 'natalia435@gmail.com', perfil: 'Administrador' },
        { tableData: 4, id: 4, nome: 'Pedro', email: 'henriquep35036@gmail.com', perfil: 'Usuário' },
        { tableData: 5, id: 5, nome: 'João', email: 'joão376@gmail.com', perfil: 'Gerente' },
        { tableData: 6, id: 6, nome: 'Marcos', email: 'marcos987@gmail.com', perfil: 'Administrador' },
        { tableData: 7, id: 7, nome: 'Euclides', email: 'euclas589@gmail.com', perfil: 'Usuário' }
    ]



    const [data, setData] = useState(empList)
    const columns = [
        {
            title: 'ID', field: 'id'
        },
        {
            title: 'Nome', field: 'nome'
        },
        {
            title: 'Email', field: 'email'
        },
        {
            title: 'Perfil', field: 'perfil'
        }
    ]

    return (
        <Container>


            <Table>

                <div>


                    <MaterialTable title="Ultimas Atas Geradas"
                        data={data}
                        columns={columns}
                        options={{
                            paging: true,
                            //Exportar para CSV//
                            //exportButton:true//

                            actionsColumnIndex: -1, addRowPosition: "first"
                        }}


                        editable={{


                            //função alterar usuario
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout((value) => {
                                        if (oldData) {

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


                    />

                </div>
            </Table>
        </Container>

    );
}

export default Main;

