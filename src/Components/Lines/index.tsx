import React from 'react';

import { Container, Lines } from './styles';

const Linhas: React.FC = () => {
  return (
    <Container>
      <Lines>
        <div className="line" id="line1" />
        <div className="line" id="line2" />
        <div className="line" id="line3" />
        <span>Fechar</span>
      </Lines>
    </Container>
  );
};

export default Linhas;
