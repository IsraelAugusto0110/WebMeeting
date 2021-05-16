package iacit;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class DB {
	
private static Connection conn = null;
	
	public static Connection getConnection() {
		if (conn == null) {
			try {
				//Carrega o arquivo "db.properties"
				Properties props = loadProperties();
				//armazena o dburl do arquivo "db.properties".
				String url = props.getProperty("dburl");
				//estabelece uma conecção com o banco de dados MySQL
				conn = DriverManager.getConnection(url, props);
			}
			catch (SQLException e) {
				throw new DBException(e.getMessage());
			}
		}
		return conn;
	}
	
	public static void closeConnection() {
		if(conn != null) {
			try {
				conn.close();
			}
			catch (SQLException e) {
				throw new DBException(e.getMessage());
			}
		}
	}
	
	private static Properties loadProperties() {
		//abre o arquivo "db.properties".
		try (FileInputStream fs = new FileInputStream("db.properties")) {
			Properties props =  new Properties();
			//carrega o arquivo "db.properties.
			props.load(fs);
			return props;
			
		} catch (IOException e) {
			throw new DBException(e.getMessage());
		}
	}
	
	public static void closeStatement(Statement st) {
		if(st != null) {
			try {
				st.close();
			} 
			catch (Exception e) {
				throw new DBException(e.getMessage());
			}
		}
	}
	
	public static void closeResultSet(ResultSet rs) {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				throw new DBException(e.getMessage());
			}
		}
	}
}
