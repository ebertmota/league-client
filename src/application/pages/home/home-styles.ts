import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  display: flex;
  flex: 1;
  height: 100%;
  background-image: url("https://images.alphacoders.com/124/1245741.jpg");
  background-repeat: no repeat;
  background-size: cover;
`;

export const LeftContent = styled.div`
  background: #FFF;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding-top: 60px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


export const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #000;
    margin-bottom: 10px;
  }
`;