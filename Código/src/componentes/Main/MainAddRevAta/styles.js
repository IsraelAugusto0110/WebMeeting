import styled from "styled-components";

export const Containerr = styled.div`
  width: 100rem;
  height: 60rem;
  position: relative;
  top: -45rem;
  left: -30rem;
  z-index:40;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  
`;


export const Assunto = styled.div`
  display: flex;
  
>div{
  display: flex;
  position: relative;
  top: 2rem;
  left: 10rem;
  width: 40rem;
  height: 15rem;
  background: red;
  border-radius: 15px;
  
  
  >label{
    position: absolute;
    width: 15rem;
    height:0rem;
    color: white;
    left: 1rem;
    top: -2rem;
    

    
  }

  >input{
    width: 40rem;
    height: 15rem;
    border-radius: 15px;
    
  }
  
  }
`;

export const Complemento = styled.div`
   position: relative;
   display: flex;

   >div{
    top: 5.3rem;
    left: 12.5rem;
    height: 0rem;
    width: 50rem;
    position: relative;
    
   

   >input{
     border-radius: 5px;
     margin-left: -7rem;
    
     position:absolute;
   }

   >label{
    position: relative;
    width: 2rem;
    height:0rem;
    color: white;
    left: 0.8rem;
    top: -2rem;
    margin-left: 4rem;
    

    
  }
   }
`;
export const Complement = styled.div`
   position: relative;
   display: flex;
   >div{
    top: 5.3rem;
    left: 31rem;
    height: 0rem;
    width: 50rem;
    position: relative;
    
   

   >input{
     border-radius: 5px;
     margin-left: -7rem;
    
     position:absolute;
   }

   >label{
    position: relative;
    width: 2rem;
    height:0rem;
    color: white;
    left: 0.8rem;
    top: -2rem;
    margin-left: 4rem;
    

    
  }
   }
`;

export const Mod = styled.div`
  background-color: #2f4050;
  color: #0000;
  width: 60%;
  height:55%;
  border-radius: 20px;
  top:-1rem;
  left: 1rem;
  position: relative;


  >h1{
    color: #fff;
    font: roboto;
    left: 18.5rem;
    position: relative;
  }
`;

export const IconButton = styled.div`
  >button{ 
    background: #2f4050;
  
  color: #fff;
  height: 25px;
  border-radius: 4px;
  width: 90px;
  margin-left: 52rem;

  cursor: pointer;
  
  &:hover {
   background: #6ADB9E;
}
  }
  
`;

export const Button = styled.div`
   position: relative;
   display: flex;
   
   >div{
    top: 10rem;
    left: 8rem;
    position: relative;
   
   
    >button{
    background: #2f4050;
  
   color: #fff;
   height: 25px;
   border-radius: 4px;
   width: 90px;
   margin-left: 11rem;

   cursor: pointer;
   
   &:hover {
    background: #6ADB9E;
}
    }
   }
`;




export const Container = styled.div`
   display: flex;
  position:fixed;
  
`;


export const Table = styled.div`
  height: 27px;
  width: 50rem;
  left: 28rem;
  top: 7rem;
  background: #2f4050;
  position: relative;
`;

export const ActionsAta= styled.div`
   display: flex;
 
   >div{
 position: relative;
left: -21rem;
top: 36rem;


 >button{
   background: #2f4050;
  
  color: aliceblue;
  height: 25px;
  border-radius: 4px;
  width: 120px;
  margin: 3px;

  cursor: pointer;
  
  &:hover {
   background: #6ADB9E;
}
   
 }
 }
`;





