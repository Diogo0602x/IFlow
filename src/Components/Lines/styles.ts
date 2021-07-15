import styled from 'styled-components';

export const Container = styled.div``;

export const Lines = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  z-index: 100;
  right: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  .show-menu .lines {
    right: 16rem;
  }

  .line {
    width: 100%;
    height: 0.1rem;
    background-color: #fff;
    box-shadow: 0.1rem 0.1rem 1px #000;
    transition: transform 1s;
  }

  .show-menu #line1 {
    transform: rotate(45deg) translate(0.3rem, 0.45rem);
  }

  .show-menu #line2 {
    opacity: 0;
    visibility: hidden;
  }

  .show-menu #line3 {
    transform: rotate(-45deg) translate(0.3rem, -0.45rem);
  }

  .lines span {
    position: absolute;
    left: 3rem;
    height: 2rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4b4949;
    color: #ffffff;
    font-family: var(--font-action);
    opacity: 0;
  }

  .lines span::before {
    content: '';
    position: absolute;
    border-right: 0.5rem solid #4b4949;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    left: -1rem;
  }

  .show-menu .lines:hover span {
    opacity: 1;
  }
`;
