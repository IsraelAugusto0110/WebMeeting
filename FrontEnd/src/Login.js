
import React, {useState} from 'react';
import LoginForm from './Componentes/LoginForm';
import Sidebar from "./Componentes/Sidebar"


function App(){
   const adminUser={
      email:"admin@admin.com",
      password:"admin123"
   }
   
   const [user, setUser] = useState({name:"", email:""});
   const [error, setError] = useState("");

   const Login = details => {
      console.log(details);

      if   (details.email === adminUser.email && details.password === adminUser.password){
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



   return(
      <div className="App">
        
        {(user.email !=="") ? (
         <div>
            <Sidebar></Sidebar>
         </div>
         
      ) : (
         <LoginForm Login={Login} error={error}/>
      
      )}
    </div>
   );




   
}
export default App;
