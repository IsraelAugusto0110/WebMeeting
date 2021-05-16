package iacit;
//excessão personalizada.
public class DBException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public DBException (String m) {
		super(m);
	}
}
