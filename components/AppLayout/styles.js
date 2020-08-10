import css from "styled-jsx/css";

import {fonts,colors,breackpoints} from '../../styles/theme'
import {addOpacityToColor} from "../../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary,0.3)
console.log(backgroundColor);
export const stylesGlobal = css.global`html,
body {
    background: 
        radial-gradient(${backgroundColor} 1px, #fafafa 1px),
        radial-gradient(${backgroundColor} 1px, #fafafa 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    display: grid;
    place-items: center;
    place-content:center;
    height:100vh;
}

* {
    box-sizing: border-box;
}
`

export default css`
main{
    background: #fff8;
    border-radius:10px;
    box-shadow: 0 10px 25px rgba(0,0,0,.1);
    height:100%;
    width: 100%;
}

@media (min-width: ${breackpoints.mobile}){
    main{
        width:${breackpoints.mobile};
        height:90vh;
        display: grid;
        place-items: center;
    }
}`