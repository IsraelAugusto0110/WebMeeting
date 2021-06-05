
import { Containerr, Mod, IconButton,Assunto,Complemento,Button,Complement } from './styles';
import React  from 'react';



// import { Container } from './styles';

const Modal  = () => {

  

  

   // const handleMouseEventOut = (e: MouseEvent<HTMLButtonElement>) => {
   //     e.preventDefault();
    //    setIsModalVisible(false)
    //  };
  return (
    <Containerr>
      <Mod>
        <h1>Informações da Revisão</h1>
        <IconButton>
          <button>Exit</button>
        </IconButton>

        <Assunto>
          <div>
            <label htmlFor="assunto"> Assunto da Revisão:</label>
            <input id="assunto" name="assunto" type="text" />
          </div>
        </Assunto>

        <Complement>
          <div>
            <label htmlFor="responsavel"> Responsavel:</label>
            <input id="responsavel" name="responsavel" type="text" />
          </div>
        </Complement>

        <Complemento>
          <div>
            <label htmlFor="prazo"> Prazo de Revisão:</label>
            <input id="prazo" name="prazo" type="text" />
          </div>
        </Complemento>

        <Button>
          <div>
            <button type="submit">Salvar</button>

            <button type="reset">Limpar</button>
          </div>
        </Button>
      </Mod>
    </Containerr>
  );
};

export default Modal;

