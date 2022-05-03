import { createGlobalStyle } from "styled-components";
//tạo global style từ styled-components
const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    display: block;
    object-fit: cover;
}
body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`;
export default GlobalStyle;
