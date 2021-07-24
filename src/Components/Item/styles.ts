import styled from 'styled-components';

export const Container = styled.button`
  width: 15vw;

  border: 0;
  color: #000000;
  background: #ffffff;
  padding: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1% 2%;
  border: solid 1px #000000;
  &:hover {
    box-shadow:  0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-color: #00FF00;
    color: #00FF00;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 98%;

  justify-content: space-between;
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 10vw;
  }
`;

export const Description = styled.div`

`;

export const Title = styled.div`
  padding: 2% 0;
  color: #3a2d32;
`;

export const Preco = styled.div`
  font-weight: 700;
  padding: 2% 0;
`;
