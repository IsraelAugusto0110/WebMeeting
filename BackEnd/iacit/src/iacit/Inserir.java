package iacit;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Inserir {

	public static void main(String[] args) {
		
		Connection conn = null;
		PreparedStatement st = null;
		
		try {
			//estabelecendo conex�o com o banco de dados MySQL
			conn = DB.getConnection();
			//C�digo que aceita uma instru��o SQL
			st = conn.prepareStatement(
					"INSERT INTO funcionario "
					+ "(Participante, Area, Email, Telefone)"
					+ "VALUES "
					+ "(?, ?, ?, ?)"
					);
			//dados a serem inseridos no banco de dados MySQL
			st.setString(1, "Especialista Thiago Fernandes Canonici");
			st.setString(2, "Comunica��o");
			st.setString(3, "thiago@ffff.com.br");
			st.setString(4, "+5512999999999");
			//Atualiza��o dos dados inseridos no banco de dados MySQL
			st.executeUpdate();
		} 
		catch (SQLException e) {
			e.printStackTrace();
		}
		//Fechando o Statement e a conec��o.
		finally {
			DB.closeStatement(st);
			DB.closeConnection();
		}
	}

}
