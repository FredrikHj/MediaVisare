  
/* ================================================== Style Rouls for Header ==================================================
Imports module */
import styled from 'styled-components';
export let specialStyle = {
    settingSymbol: {
        'border': '1 solid red',
        'marginTop': '7%',
        'width': '50%',
        'height': '100%',
        'zIndex': '-1',
    }
}
export let HeaderStyle = {
    mainContainer: styled.section`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: orange;
        height: 5vh;
        z-index: 0;
    `,
    headLine: styled.section`
        width: 75%;
        text-align: center;
    `,
    appSetting: styled.section`
        width: 15%;
    `,
    mediaBtnContainer: styled.section`
        width: 25%;
        text-align: center;
    `,
    mediaBtnImg: styled.button`

    `,
    mediaBtnHomeMovies: styled.button`

    `,
  }
