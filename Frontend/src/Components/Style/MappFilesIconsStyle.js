  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let MappFilesIconStyle = {
    filesIconContainer: styled.section`
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow-y: scroll;
    `,
    mappIconContainer: styled.section`
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
    `,
    mediaIconMapp: styled.div`
        margin-top: 5px;
        margin-left: 10px;
    `,
    mediaIconBtn: styled.button`
        position: relative;
        top: -70px;
        left: -2px;
        width: 55%;
        height: 6vh;
        opacity: 0;
    `,
    mediaIconMappName: styled.div`
        margin-top: -110px;
        margin-left: -2px;
    `,
    mediaFileIconContainer: styled.div`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-left: 2%;
    `,
    mediaIconTool: styled.div`
        font-family: 'Times New Roman';
        font-size: 13px;
        font-weight: bold;
    `,
    mediaIconName: styled.div`
        font-family: 'Times New Roman';
        font-size: 13px;
        font-weight: bold;
    `,
    mediaFileIcon: styled.img``,
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