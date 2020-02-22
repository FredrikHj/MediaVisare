import styled from 'styled-components';

export let StyleMainBody = styled.section`
  color: black;
  font-family: Arial, "Times New Roman";
  margin-top: 0;
  margin-left: 0;
  width: 100%;
`;
export let StyleHeader = {
  container: styled.section`
    height: 10vh;
    background-color: #009be5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  headline: styled.p`
      display: inline-block;
      text-align: center;
      color: white;
      font-size: 20px;
  `,
}