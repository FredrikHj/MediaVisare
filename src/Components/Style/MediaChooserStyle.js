  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';

export let MediaChooserStyle = {
    mainContainer: styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 95vh;
        `,
    pathesContainer: styled.section`
        width: 100%;
        background-color: white;
    `,
    mediaContent: styled.section`
        margin-top: 1%;
        width: 90%;
        height: 75vh;
        display: flex;
        flex-direction: row;
    `,
    iconsContainer: styled.section`
        border: 5px solid orange;
        border-radius: 10vh; 
        width: 60%;
        text-align: center;
        background-color: white;
    `,
    viewerContainer: styled.section`
        border: 5px solid orange;
        border-radius: 10vh; 
        margin-left: 5%;
        width: 35%;
        text-align: center;
        background-color: white;
        
    `,
  }