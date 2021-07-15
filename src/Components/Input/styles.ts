import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 12px;
  padding: 3.5% 4%;
  width: 100%;

  border: 1px solid #3f1229;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #3f1227;
      border-color: #3f1227;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #3f1227;
    font-family: 'Montserrat';
    font-size: 14px;

    &::placeholder {
      color: #b28d9f;
      font-size: 12px;
    }
  }

  > svg {
    margin-right: 4%;
    width: 6%;
  }
  svg {
    width: 6%;
  }
`;

export const Error = styled(Tooltip)`
  height: 15px;
  margin-left: 16px;

  svg {
    margin: 0;
    width: 100%;
  }

  span {
    background: #c53030;
    color: #f5f5f5;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
