//Configuração da parte da tela que carrega as tabela e as opções do menu

import React ,{useState}from 'react';
import { Container,Participantes} from './styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';





 const Main = () => {
    
    
    const[inputFields, setInputFields] = useState([
       {firstName: '', lastName: ''},
    ])
  
    

    const handleAddFields = () => {
        setInputFields([...inputFields,{ firstName: '', lastName: ''}])
    }
   
    
    /*const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1)
        setInputFields(values);
        
    }*/
    

    return(
        <Container>
         <Participantes>
        
            <form>
                { inputFields.map((inputField, index)=>(
                     <div key={index}>
                       <TextField
                        name="FirstName"
                        label="First Name"
                        variant="filled"
                        value={inputField.firstName}
                       />
                        <TextField
                        name="LastName"
                        label="Last Name"
                        variant="filled"
                        value={inputField.lastName}
                       />
                       <IconButton
                          /*onClick={() => handleRemoveFields(index)}*/
                       >
                           <RemoveIcon/>
                       </IconButton>
                       <IconButton
                          onClick={()=> handleAddFields()}
                       >
                           <AddIcon/>
                       </IconButton>
                     </div>
                ))  }
            </form>
       
         </Participantes>
        </Container>
    );
}

export default Main;