
import React, {useState} from 'react';




function App(){
   const adminUser={
      email:"admin@admin.com",
      password:"admin123"
   }
  /* 
   const [user, setUser] = useState({name:"", email:""});
   const [error, setError] = useState("");

   const Login = () => {
      console.log(details);

      if   ( details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logado");
      setUser({
         name:details.name,
         email: details.email
      });
      } else {
         console.log("Dados incorreto! ");
         setError("Dados incorreto! ")

      }
   }
 type Action = { type: 'setUsername', payload: string }
        | { type: 'setPassword', payload: string }
        | { type: 'setIsButtonDisabled', payload: boolean }
        | { type: 'loginSuccess', payload: string }
        | { type: 'loginFailed', payload: string }
        | { type: 'setIsError', payload: boolean };

        const reducer = (state: State, action: Action): State => {
                switch (action.type) {
                  case 'setUsername': 
                    return {
                      ...state,
                      username: action.payload
                    };
                  case 'setPassword': 
                    return {
                      ...state,
                      password: action.payload
                    };
                  case 'setIsButtonDisabled': 
                    return {
                      ...state,
                      isButtonDisabled: action.payload
                    };
                  case 'loginSuccess': 
                    return {
                      ...state,
                      helperText: action.payload,
                      isError: false
                    };
                  case 'loginFailed': 
                    return {
                      ...state,
                      helperText: action.payload,
                      isError: true
                    };
                  case 'setIsError': 
                    return {
                      ...state,
                      isError: action.payload
                    };
                }
              }


   return(
      <div className="App">
        
        
    </div>
   );


   type State = {
        username: string
        password:  string
        isButtonDisabled: boolean
        helperText: string
        isError: boolean
      };
      


     
      const initialState:State = {
        username: '',
        password: '',
        isButtonDisabled: true,
        helperText: '',
        isError: false
      };


      type Action = { type: 'setUsername', payload: string }
        | { type: 'setPassword', payload: string }
        | { type: 'setIsButtonDisabled', payload: boolean }
        | { type: 'loginSuccess' , payload:string}
        | { type: 'loginFailed', payload: string }
        | { type: 'setIsError', payload: boolean };


      const reducer = (state: State , action: Action): State => {
        switch (action.type) {
          case 'setUsername': 
            return {
              ...state,
              username: action.payload
            };
          case 'setPassword': 
            return {
              ...state,
              password: action.payload
            };
          case 'setIsButtonDisabled': 
            return {
              ...state,
              isButtonDisabled: action.payload
            };
          case 'loginSuccess': 
            return {
              ...state,
              helperText: action.payload,
              isError: false
            };
          case 'loginFailed': 
            return {
              ...state,
              helperText: action.payload,
              isError: true
            };
          case 'setIsError': 
            return {
              ...state,
              isError: action.payload
            };
        }
      }
     
  
        
            
              const classes = useStyles();
              const [state, dispatch] = useReducer(reducer, initialState);
            
              useEffect(() => {
                if (state.username.trim() && state.password.trim()) {
                 dispatch({
                   type: 'setIsButtonDisabled',
                   payload: false
                 });
                } else {
                  dispatch({
                    type: 'setIsButtonDisabled',
                    payload: true
                  });
                }
              }, [state.username, state.password]);
            
              const handleLogin = () => {
                if (state.username === 'abc@email.com' && state.password === 'password') {
                  dispatch({
                    type: 'loginSuccess',
                   payload: 'loginSucess'
                 
  
                  });
                } else {
                  dispatch({
                    type: 'loginFailed',
                    payload: 'Incorrect username or password'
                  });
                }
              };
            
              const handleKeyPress = (event: React.KeyboardEvent) => {
                if (event.keyCode === 13 || event.which === 13) {
                  state.isButtonDisabled || handleLogin();
                }
              };
            
              const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
                (event) => {
                  dispatch({
                    type: 'setUsername',
                    payload: event.target.value
                  });
                };
            
              const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
                (event) => {
                  dispatch({
                    type: 'setPassword',
                    payload: event.target.value
                  });
                }


                  return (
        <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Login App" />
          <CardContent>
            <div>
              <TextField
                error={state.isError}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
              />
              <TextField
                error={state.isError}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={handleLogin
                            
              }
              disabled={state.isButtonDisabled}>
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    );
}



*/



   
}
export default App;
