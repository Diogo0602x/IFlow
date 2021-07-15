import React from 'react';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Computador from '../../assets/pc-gamer.png';
import Notebook from '../../assets/notebook.png';
import Iphone from '../../assets/iphone_12.png';
import Tv from '../../assets/tv.png';

import { Container } from './styles';
import Lines from '../../Components/Lines';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Lines />
      <Header />
      <Item title="Computador" img={Computador} />
      <Item title="Notebook" img={Notebook} />
      <Item title="Iphone" img={Iphone} />
      <Item title="Tv" img={Tv} />
    </Container>
  );
};

export default LandingPage;
