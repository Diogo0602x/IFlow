import React from 'react';

import { Container, KnowMore, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>IFlow</Logo>
    </Container>
    <KnowMore>Saiba mais</KnowMore>
  );
};

export default Header;
