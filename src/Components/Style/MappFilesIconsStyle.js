  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let MappFilesIconStyle = {
    filesIconContainer: styled.section`
        width: 97%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 75%;
        flex-wrap: wrap;
        overflow-y: scroll;
    `,
    mappIconContainer: styled.section`
        width: 97%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow-y: auto;
    `,
    mediaIconMapp: styled.div`
        border: 1px solid red;
        margin-top: 5px;
        margin-left: 10px;
        text-align: center;
    `,
    mediaIconContainer: styled.div`
        border: 1px solid red;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-left: 2%;
    `,
    mediaIconName: styled.div`
        font-family: 'Times New Roman';
        font-size: 13px;
        font-weight: bold;
    `,
    mediaIcon: styled.img``,
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