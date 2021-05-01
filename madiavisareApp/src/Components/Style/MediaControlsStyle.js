  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let HeaderStyle = {
    mainContainer: styled.section`
        border: 1px solid red;  
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: orange;
        height: 5vh;
    `,
    headLine: styled.section`
        border: 1px solid red;
        width: 75%;
        text-align: center;
    `,
    media: styled.section`
        border: 1px solid red;
        width: 25%;
        text-align: center;
    `,
  }