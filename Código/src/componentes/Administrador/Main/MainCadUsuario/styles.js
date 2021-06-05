import styled, {css} from "styled-components";

const iconCSS = css`
   flex-shrink: 0;
   width: 150px;
   height: 130px;
   color: black;

`;

export const Container = styled.div`
   display: flex;
 
`;

export const Form = styled.div`
   display: flex;
   flex-direction: column;

   position: fixed;
   left: 18rem;
   height: 0;
   width: 0;
   
>div{
   left: 10rem;
   top: 3rem;
   position: relative;
}

>label{
            
   font-size: 14px;
   font-weight: 500;
   color: white;  
                   
}

>input {
      border: 1px solid #fff;
      border-radius: 8px;  
      height: 36px;
      
}
  
`;

export const Form0= styled.div`
   display: flex;

   flex-direction: column;

   position: fixed;
   left: 18rem;
   height: 0;
   width: 0;
   
>div{
   left: 30rem;
   top: 3rem;
   position: relative;
}

>label{
            
   font-size: 14px;
   font-weight: 500;
   color: white;  
                   
}

>input {
      border: 1px solid #fff;
      border-radius: 8px;  
      height: 36px;
      
}
  
  
`;

export const Form1= styled.div`
   
   display: flex;

   flex-direction: column;

   position: fixed;
   left: 18rem;
   height: 0;
   width: 0;
   
>div{
   left: 30rem;
   top: 10rem;
   position: relative;
}

>label{
            
   font-size: 14px;
   font-weight: 500;
   color: white;  
                   
}

>input {
      border: 1px solid #fff;
      border-radius: 8px;  
      height: 36px;
      
}
  
`;

export const Form2= styled.div`
   display: flex;
   flex-direction: column;

   position: fixed;
   left: 18rem;
   height: 0;
   width: 0;
   
>div{
   left: 10rem;
   top: 10rem;
   position: relative;
}

>label{
            
   font-size: 14px;
   font-weight: 500;
   color: white;  
                   
}

>input {
      border: 1px solid #fff;
      border-radius: 8px;  
      height: 36px;
      
}
  
  
`;

export const Form3= styled.div`
   display: flex;
   flex-direction: column;

   position: fixed;
   left: 18rem;
   height: 0;
   width: 0;
   
>div{
   left: 48rem;
   top: 3rem;
   position: relative;
}

>label{
            
   font-size: 14px;
   font-weight: 500;
   color: white;  
                   
}

>input {
      border: 1px solid #fff;
      border-radius: 8px;  
      height: 36px;
      
}
  
  
`;



export const Button= styled.div`
   display: flex;

>div{
   position: relative;
   left: 77rem;
   top: 18rem;
   height: 0;
  
   


>button{
   background: #2f4050;
  
   color: aliceblue;
   height: 25px;
   border-radius: 4px;
   width: 90px;
   margin: 3px;

   cursor: pointer;
   
   &:hover {
    background: #6ADB9E;
}

}
}  
  
`;

export const Perfil = styled.div`
 display: flex;
 
 >span {
      left: 18rem;
      top: 19.5rem;
      position: relative;
      height: 0px;

      color: black;

    
   }



   >line{
      position: absolute;
    width: 170px;
   
    left: 19rem;
    top: 20.6rem;

border: 1px solid black;
   }

   >label{
    position: absolute;
    width: 51.7rem;
    
    left: 37.5rem;
    top: 20.6rem;

    border: 1px solid black  ;
   }
  
  
`;

export const Form4 = styled.div`
   display: flex;
  
   > img {
    ${iconCSS}
    position: absolute;
    left: 47rem;
    top: 23rem;
    color: black;
    
   }

   > div{
      position: relative;
   left: 25.2rem;
   top: 35rem;
   height: 0;
   
   >label{
      margin: 7px;
   }
  
   
   }
`;
