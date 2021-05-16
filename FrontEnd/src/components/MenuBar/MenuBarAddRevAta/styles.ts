import styled, { css } from "styled-components";


const iconCSS = css`
   flex-shrink: 0;

   width: 30px;
   height: 30px;
   color: white;

`;

export const Container = styled.div`
position: fixed;

height: 100vh;
overflow-y: auto;
width: 18rem;

background-color: #2f4050;
`;

export const Topside = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1280px){
    align-items: flex-start;
}

> h1 {
    margin: 15px;
    margin-left: 92px;
    color: #fff;
    font-family: Roboto;
    font-size: 28px;
    letter-spacing: 2px;
}
`;

export const MenuButton = styled.div`
display: flex;
align-items: center;
flex-shrink: 0;

> img {
    ${iconCSS}
    margin-left: 30px;
    height: 32px;
    width: 32px;
    
}

> span {
    margin: 15px;
    margin-left: 35px;
    color: #fff;
    font-weight: bold;
    font-size: 19px;
    letter-spacing: 0.4px;
    width: 10.3rem;
   
   
}

padding-right: 12px;
cursor: pointer;
border-radius: 0rem;


&:hover {
    background: #6ADB9E;
}

`;

export const MenuButtonSair= styled.div`
display: flex;
align-items: center;
flex-shrink: 0;

>line{
    position: absolute;
    width: 245px;
    height: 0px;
    left: 23px;
    top: 516px;

border: 1px solid #FFFFFF;
}
> img {
    ${iconCSS}
    margin-left: 70px;
}



>span{
    margin-left: 78px;
    color: white;
    margin: 19px;
    font-weight: bold;
    font-size: 19px;
}

padding-right: 87.2px;
cursor: pointer;
border-radius: 0rem;


&:hover {
    background: #6ADB9E;
}
`;
