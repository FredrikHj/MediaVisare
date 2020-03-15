import styled from 'styled-components';

export let StyleHomeImages = {
  container: styled.section`
    margin-top: -8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 88vh;
    background-color: #eaeff1;
  `,
  folderFileContainer: styled.section`
    display: flex;
    flex-direction: column;
    width: 40%;
  `,
  folders: styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `,
  files: styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `,
  appBody__mainContent: styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  `,
  iconMeasurement: styled.div`
    margin: 10px 10px 10px 10px;
    height: 1%;
  `,
}