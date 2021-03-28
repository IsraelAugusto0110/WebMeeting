package iacit;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Resgatar {

	public static void main(String[] args) {

		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;

		//digitar o caminho de salvamento aqui.
		String path = "C:\\Users\\Thiago Fernandes\\OneDrive - Fatec Centro Paula Souza\\Documents\\PI4\\participantes.csv";

		try {
			conn = DB.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery("select * from funcionario");
			
			//salvando os dados do mysql em um arquivo csv
			try (BufferedWriter bw = new BufferedWriter(new FileWriter(path))) {
				//escrevendo e pulando linha no arquivo participantes.csv
				bw.write("Id,Participante,Area,Email,Telefone");
				bw.newLine();
				while (rs.next()) {
					bw.write(rs.getInt("Id")
							+ ","
							+ rs.getString("Participante")
							+ ","
							+ rs.getString("Area")
							+ ","
							+ rs.getString("Email")
							+ ","
							+ rs.getString("Telefone"));
					
					bw.newLine();
				}
			} 
			catch (IOException e) {
				e.printStackTrace();
			}

		} 
		catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
