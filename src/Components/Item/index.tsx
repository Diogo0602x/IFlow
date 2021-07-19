import React from 'react';

import { Container, Content, Description, Title, Img, Preco } from './styles';

interface Props {
  name: string;
  img: string;
  preço: string;
}

const Item: React.FC<Props> = ({ name, img, preço }: Props) => {
  return (
    <Container>
      <Content>
        <Img>
          <img src={img} alt="itens" />
        </Img>

        <Description>
          <Title>{name}</Title>
          <Preco>Preço: {preço}</Preco>
        </Description>
      </Content>
    </Container>
  );
};

export default Item;
