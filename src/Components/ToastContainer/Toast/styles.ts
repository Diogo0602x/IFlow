import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
}

const toastTypeVariations = {
  info: css`
    background: #3172b7;
    color: #fff;
  `,
  success: css`
    background: #2e656a;
    color: #fff;
  `,
  error: css`
    background: #c53030;
    color: #fff;
  `,
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 3% 10% 3% 3%;
  border-radius: 4px;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
