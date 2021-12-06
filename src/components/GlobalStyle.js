import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient( #1C1E31, #131628);
  font-family: "Poppins", sans-serif;
}

button {
  text-decoration: none;
  border: 3px solid #fd4370;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s ease;
  &:hover{
    background-color: #fd4370;
  }
}

  h2{
    color: white;
    font-weight: lighter;
    font-size: 4rem;
    /* text-decoration: underline 0.15em #fd4370;
    text-underline-offset: 0.3em; */
  }
  h3{
        color:white;
    }
    p{
        padding: 3rem 0rem;
        color: #d1d5e8;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
    span{
        font-weight: bold;
        color: #fd4370;
    }
    a{
        font-size: 1.1.rem;
    }

`;

export default GlobalStyle;
