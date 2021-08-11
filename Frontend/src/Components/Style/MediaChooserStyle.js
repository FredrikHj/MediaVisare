  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
const mainContainerWHeight = 95;

export let MediaChooserStyle = {
    mainContainer: styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: ${mainContainerWHeight}vh;
    `,
    pathesContainer: styled.section`
        width: 100%;
        background-color: white;
    `,
    SpinnerPoss: styled.section`
        margin-top: calc(50% - 20%);
    `,
    mediaContent: styled.section`
        margin-top: 1%;
        width: 90%;
        height: 75vh;
        display: flex;
        flex-direction: row;
        align-content: center;
    `,
    iconsContainer: styled.section`
        border: 5px solid orange;
        width: 60%;
        text-align: center;
        background-color: white;
        border-top-left-radius: 10vh;
        border-bottom-left-radius: 10vh;
    `,
    viewerContainer: styled.section`
        border: 5px solid orange;
        margin-left: 5%;
        width: 100%;
        text-align: center;
        background-color: white;
        border-top-right-radius: 10vh;
        border-bottom-right-radius: 10vh;
    `,
  }