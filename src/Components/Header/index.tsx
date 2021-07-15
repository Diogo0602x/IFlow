import React from 'react';

import { Container, KnowMore, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>IFlow</Logo>
      <KnowMore> Saiba mais </KnowMore>
    </Container>
  );
};

export default Header;
