  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let MappFilesIconStyle = {
    filesIconContainer: styled.section`
        width: 100%;
        height: 35%;
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
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `,
    mediaIconMapp: styled.div`
        margin-top: 5px;
        margin-left: 15px;
    `,
    mediaIconMappName: styled.p`
        width: 100%;
        margin-top: -50px;
    `,
    mediaIconMappNameBigger4: styled.p`
        margin-top: -50px;
        margin-left: 70px;
        width: 30%;
        overflow-x: scroll;
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
  }