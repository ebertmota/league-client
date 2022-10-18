import styled, { css } from 'styled-components';

type ContainerProps = {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #efefef;
  width: 300px;
  height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid transparent;
  ${({ isFocused }) => isFocused && css`border-color: #000;`}

  label {
    color: #000;
    font-size: 12px;
  }

  input {
    outline: 0;
    border: 0;
    background: transparent;
    font-size: 14px;
    width: 100%;
    height: 25px;

    &::placeholder {
      color: #000;
    }
  }
`;