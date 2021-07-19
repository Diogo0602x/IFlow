import React, { useState } from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Computador from '../../assets/pc-gamer.png';
import Iphone from '../../assets/iphone_12.png';
import Tv from '../../assets/tv.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import { Container, Content, Title, Products, Register, Form, Footer, TextFooter } from './styles';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const addEmailInLocalstorage =(chave: string, valor: string) => {
    localStorage.setItem(chave, valor);
    toast.success('Email cadastrado com sucesso')
  }
  const ShowEmailInLocalstorage =(chave: string) => {
    toast.info('Este é o email cadastrado')
    alert (localStorage.getItem(chave) )
  }

  return (
    <Container id="home">
      <ToastContainer />
      <Header />
      <Content>
        <Title id="products">Preços imbativeis!</Title>
        <Products>
          <Item name="PC Gamer ITX Arena OwNed Powered By Asus, I5 9400F, GTX 1050TI 4GB, 8GB, SSD 240GB" img={Computador} preço="3.999,90 R$"/>
          <Item name="iPhone 12 Pro Max Apple 128GB - 6,7” Câm. Tripla 12MP iOS" img={Iphone} preço="5.509,07 R$"/>
          <Item name="Smart TV LED 55 UHD 4K LG 55NANO81 NanoCell, IPS, Bluetooth, HDR, Inteligência Artificial ThinQ AI, Google Assistente, Alexa IOT, Smart Magic - 2020" img={Tv} preço="2.299,00 R$"/>
        </Products>
        <Register>
          <Title id="register">Cadastre-se para receber novas promoções!</Title>
          <Form>
            <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={() => addEmailInLocalstorage('@IFlow:email', email)}>inscrever-se</button>
            <button onClick={() => ShowEmailInLocalstorage('@IFlow:email')}>consultar</button>
          </Form>
        </Register>
      </Content>
      <Footer>
        <TextFooter> © Developed by IFlow - direitos reservados.</TextFooter>
      </Footer>
    </Container>
  );
};

export default LandingPage;
