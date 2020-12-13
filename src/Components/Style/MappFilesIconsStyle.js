  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let MappFilesIconStyle = {
    iconContainer: styled.section`
        border: 1px solid red;
        width: 97%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50vh;
        flex-wrap: wrap;
        overflow-y: scroll;
    `,
    mediaIconImg: styled.img`
        border: 1px solid red;
        margin-top: 10%;
        margin-left: 2%;

        width: 8%;
        text-align: center;
    `,
    mediaIconHomeMovie: styled.section`
        border: 1px solid red;
        width: 75%;
        text-align: center;
    `,
    mediaTextName: styled.section`
        border: 1px solid red;
        width: 25%;
        text-align: center;
    `,
  }