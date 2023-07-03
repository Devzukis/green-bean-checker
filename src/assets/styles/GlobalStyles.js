import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

::-moz-selection {
    background: #2D65F8;
    text-shadow: none;
    color: #ffffff;
}
::selection {
    background: #2D65F8;
    text-shadow: none;
    color: #ffffff;
} 

html,
body {
    font-size: 16px; 
    vertical-align: baseline;
    font-weight: 500;
    line-height: 1.6;
    font-weight: 500;
    overflow-x: hidden; 
    background-color: #040C12 !important; 
}

img {
    max-width: 100%;
    height: auto;
}

p {
    margin: 0px;
    line-height: 1.8;  
}


h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    line-height: 1.35;
    font-family: 'Bakbak One', cursive;
}

a {
    text-decoration: none !important;
    outline: none;
    transition: all .4s;
}


ul, ol {
    list-style: outside none none;
    margin: 0px;
    padding: 0px;
}

html,
body, p, a{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
} 

.ju367v4t {
    margin-top: 40px;
}

.ju367v48 {
    margin-right: 40px;
}

.ju367v3n {
    margin-left: 40px;
}

.ju367v32 {
    margin-bottom: 40px;
}

.iekbcc0{
    font-family: 'Bakbak One', cursive;
    font-weight: 400;
}

.ju367v1d,
.ju367v1c,
.ju367v1b{
    font-weight: 400 !important;
}

#rk_connect_title{
    font-family: 'Bakbak One', cursive;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 22px;
    line-height: 24px;
}

.ju367v11{
    font-family: 'Bakbak One', cursive !important;
}

._1vwt0cg2{
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  }

@media (min-width: 1400px){
    .container{
        max-width: 1200px;
        padding: 0px 20px;
    }
} 

`;

export default GlobalStyles;
