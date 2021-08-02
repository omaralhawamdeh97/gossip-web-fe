import styled from "styled-components";

export const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 500px;
  margin-bottom: 25px;
`;

export const ProfileCard = styled.div`
  /* background-color: black; */ //Remove unused code
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  align-items: center;
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

export const ModalImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 500px;
`;

export const Save = styled.button`
  align-self: center;
  font-family: Roboto;
  border-radius: 8px;
  background-color: transparent;
  margin-top: 10px;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 45px;
`;

export const SaveDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Error = styled.p`
  color: red;
`;
