import React from 'react';

import { Container, Title, Img } from './styles';

interface Props {
  title: string;
  img: string;
}

const Item: React.FC<Props> = ({ title, img }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Img>
        <img src={img} alt="itens" />
      </Img>
    </Container>
  );
};

export default Item;
