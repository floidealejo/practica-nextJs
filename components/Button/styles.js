import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
    button{
        background: ${colors.black};
        border 0;
        cursor:pointer;
        color: #fff;
        border-radius: 100px;
        font-weight:800;
        padding: 8px 24px;
        transition: opacity .3s ease;         
    }
    button:hover{
        opacity:0.7;
    }
`