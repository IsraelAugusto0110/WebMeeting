
import React from 'react';
import { Container,Form,Form0,Form1,Perfil,Form2,Form3,Button,Form4} from './styles';
import Cadastro from '../../../images/Cadastro.png';




const MainUsu = () => {
    return (
      <Container>
        <Form>
          <div>
            <label htmlFor="title">Nome:</label>
            <input id="title" name="title" type="text" />
          </div>
        </Form>

        <Form0>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="text" />
          </div>
        </Form0>

        <Form1>
          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input
              id="telefone"
              name="telefone"
              data-mask="(00) 0000-0000"
              data-mask-selectonfocus="true"
            />
          </div>
        </Form1>

        <Form2>
          <div>
            <label htmlFor="cargo">Cargo:</label>
            <input id="cargo" name="cargo" type="text" />
          </div>
        </Form2>

        <Form3>
          <div>
            <label htmlFor="departamento"> Departamento:</label>
            <input id="departamento" name="departamento" type="text" />
          </div>
        </Form3>

        <Button>
          <div>
            <button type="submit">Salvar</button>

            <button type="reset">Limpar</button>
          </div>
        </Button>

        <Perfil>
          <line></line>
          <span>Pefil de Acesso</span>
          <label />
        </Perfil>

        <Form4>
          <img src={Cadastro} alt="" />
          <div>
            <label htmlFor="usuario">Usuário:</label>
            <input id="usuario" name="perfil" type="radio" />

            <label htmlFor="gerente">Gerente:</label>
            <input id="gerente" name="perfil" type="radio" />

            <label htmlFor="adm">Administrador:</label>
            <input id="adm" name="perfil" type="radio" />
          </div>
        </Form4>
      </Container>
    );
}

export default MainUsu;