  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
const mainContainerWidth = 2000;

export let AppBodyStyle = {
    mainContainer: styled.section`
        min-width: 500px;
        max-width: ${mainContainerWidth}px;
        height: 97vh;
        display: flex;
        flex-direction: column;
        background-color: darkgray;
        margin-top: 0px;
        font-size: 1pm;
        margin-left: calc(50% - ${mainContainerWidth/2}px);
    `,
  }