import React from 'react';

import { Container, Content, Logo, Nav, Home, Products, Resgiter} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>IFlow</Logo>

        <Nav>
          <Home href="#home">Home</Home>
          <Products href="#products">Produtos</Products>
          <Resgiter href="#register">Cadastro</Resgiter>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
