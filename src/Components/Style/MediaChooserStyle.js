  
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
        margin-top: 5%;
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: row;
    `,
    filesIcon: styled.section`
        border: 5px solid orange;
        border-top-right-radius: 10vh; 
        border-bottom-right-radius: 10vh; 
        width: 25%;
        text-align: center;
        background-color: white;
    `,
    viewer: styled.section`
        border: 5px solid orange;
        border-top-left-radius: 10vh; 
        border-bottom-left-radius: 10vh; 
        margin-left: 5%;
        width: 70%;
        text-align: center;
        background-color: white;
        
    `,
  }