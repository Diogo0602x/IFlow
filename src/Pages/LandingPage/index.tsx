import React from 'react';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Computador from '../../assets/pc-gamer.png';

import {} from './styles';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Item title="Computador" img={Computador} />
    </>
  );
};

export default LandingPage;
