import styled from "styled-components";

export const SignUpScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("https://s3-alpha-sig.figma.com/img/6c89/de62/6b13ed719b194d83b8f233a211d5681f?Expires=1628467200&Signature=R2xEBFACN4xKuSze3~bTOgmel2rGO6KB5w6quQarvWBNq~zgD9UNb05olQ9MDgzQfb5hVrnCnvLU874iMmRW~sYz6GxYlAarcus2l3~Plwf0lYv7qZlx3w1gSbTI1ZEb3wx6BjVcoW8GsHr-Rs1SZzm-~cp5ZjLe-MPrzB~we3fxqwKqzzxq0se~GnzGdUB8KSCmyUTIlHmELWfWyDiwvLX5R4BUzkborDgsgbpGphVTcnXGis6U2ywjDMnoeCwFt6JaqU8YbgG4nULlaf-nMG9161zjXBsOgxUWX-pGXASFbff9EJS5~glS5lltuplCsg7JISHstKyVARSX~Yy3xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
`;

export const Title = styled.h2`
  margin-top: 171px;
  font-family: Solway;
  font-size: 50px;
`;
export const Form = styled.form`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 450px;
  background-color: #a7a99e;
  /* opacity: 0.6; */
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
`;
export const Label = styled.p`
  align-self: flex-start;
  font-family: Antic;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-top: 5px;
  margin-left: 20px;
`;

export const Input = styled.input`
  margin-left: 20px;
  align-self: flex-start;
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  opacity: 0.4;
  border-radius: 5px;
  font-weight: bold;
  color: black;
`;
