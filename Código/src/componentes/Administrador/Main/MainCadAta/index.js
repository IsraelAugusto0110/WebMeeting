//Configuração da parte da tela que carrega as tabela e as opções do menu

import {  TextField } from "@material-ui/core";
import React from "react";
import Integrantes from "./integrantes";



import { Container, Head, BlocoNumber,BlocoInfo, BlocoLogo, Ata} from './styles';


const MainCad = () => {
 
 

  
  return (
    <Container>
      <Head>
        <BlocoNumber>
          <TextField
            id="number"
            label="Numero da Ata"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </BlocoNumber>

        <BlocoInfo>
          <inicio>
            <TextField
              id="DHinicio"
              label="Inicio"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </inicio>

          <fim>
            <TextField
              id="DHfim"
              label="Fim"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </fim>

          <local>
            <TextField id="local" label="Local" />
          </local>
        </BlocoInfo>

        <BlocoLogo>
          <label>LOGO</label>
        </BlocoLogo>
      </Head>

      <Ata>
        <label>ATA DE REUNIÃO</label>
      </Ata>
       
       <Integrantes/>


    </Container>
  );
}
export default MainCad;

