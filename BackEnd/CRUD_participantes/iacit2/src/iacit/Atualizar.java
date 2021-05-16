package iacit;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class Atualizar {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		Connection conn = null;
		PreparedStatement st = null;
		
		try {
			conn = DB.getConnection();
			
			st = conn.prepareStatement("UPDATE funcionario "
										+ "SET Participante = ? "
										+ "WHERE "
										+ "(Id = ?) ");
			
			System.out.print("Digite a quantidade de linhas: ");
			int a = sc.nextInt();
			sc.nextLine();
			
			for(int i=0; i<a; i++) {
				System.out.print("Digite o título e nome do participante: ");
				String p = sc.nextLine();
				st.setString(1, p);
				
				System.out.print("Digite o Id do participante: ");
				int pk = sc.nextInt();
				st.setInt(2, pk);
				
				System.out.println("lina " + pk + " alterada");
			}
			int rowsAffected = st.executeUpdate();
			
			System.out.println("Feito! Linhas afetadas: " + rowsAffected);
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			DB.closeStatement(st);
			DB.closeConnection();
			sc.close();
		}
	}

}
