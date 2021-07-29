  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let ImageViewerStyle = {
    MediaContainer: styled.section`
        padding-top: 10px;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    HeadLine: styled.section`
        border: 1px solid red;
        text-align: center;
        font-weight: bold;
        letter-spacing: 5px;
    `,
    SubLine: styled.div`
        border: 1px solid red;
    `,
    NameContainer: styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    `,
    SizeDateContainer: styled.section`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 15vh;
    `,
    SizeContainer: styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
    `,
    DateTable: styled.table`
        border: 1px solid red;
        width: 100%;
    `,
    MediaShower: styled.img`
        border: 1px solid red;
        width: 50%;
        text-align: center;
    `,
    DescriptionContainer: styled.table`
        border: 1px solid red;
        padding: 2%;
        width: 100%;
        overflow-y: auto;
    `,
    DescriptionPharagraph: styled.table`
        border: 1px solid red;
        padding: 2%;
        width: 100%;
        height: 13vh;
        overflow-y: auto;
    `,
  }
  export let MovieViewerStyle = {

  }