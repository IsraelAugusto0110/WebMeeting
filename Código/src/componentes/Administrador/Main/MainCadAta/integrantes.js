import { TextField } from "@material-ui/core";
import React , {useState}from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

import { Participantes, Projeto, Informações} from './styles';

const Integrantes = () => {
  const [inputList, setInputList] = useState([{ Participante: "", Área: "" , Email:"", Telefone:""}]);
 
  
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  
  const handleAddClick = () => {
    setInputList([...inputList, { Participante: "", Área: "" , Email:"", Telefone:""}]);
  };

       
     return(
      <Participantes>
      <Projeto>
        <TextField id="projeto" label="Projeto" />
      </Projeto>
      
      <Informações>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <TextField
              id="participante"
              label="Particpante"
              variant="outlined"
            />

            <TextField id="area" label="Área" variant="outlined" />

            <TextField id="email" label="E-mail" variant="outlined" />

            
            <TextField id="telefone" label="Telefone" variant="outlined" />

         
            <div className="btn-box">
              {inputList.length !== 1 && (
                <IconButton onClick={() => handleRemoveClick(i)}>
                   <RemoveIcon/>
                </IconButton>
              )}
              {inputList.length - 1 === i && (
                <IconButton onClick={handleAddClick}>
                  <AddIcon/>
                </IconButton>
              )}
            </div>
          </div>
        );
      })}
      </Informações>
      </Participantes>
     );


}


export default Integrantes;