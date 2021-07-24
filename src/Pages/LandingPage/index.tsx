import React, { useCallback, useState, useRef } from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Computador from '../../assets/pc-gamer.png';
import Iphone from '../../assets/iphone_12.png';
import Tv from '../../assets/tv.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';


import { Container, Content, Title, Products, Register, FormComponent, Footer, TextFooter } from './styles';


const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [address, setAddress] = useState('');
  const formRef = useRef<FormHandles>(null);
  const value = {email, name, cel, address}
  const addDataInLocalstorage =(chave: string, value: {}) => {
    localStorage.setItem(chave, JSON.stringify(value));
    toast.success('Dados cadastrados com sucesso')
  }
  const ShowDataInLocalstorage =(chave: string) => {
    toast.info('Este são seus dados cadastrados')
    alert (localStorage.getItem(chave) )
  }
 
  const handleSubmit = useCallback(
    async () => {
      try {
        formRef.current?.setErrors({});
        
        addDataInLocalstorage('@IFlow:data', value);
        
        } catch (err) {

       toast.error('Erro ao realizar cadastro');
      }
    },
    [],
  );

  
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

          <FormComponent>
           <Form ref={formRef} onSubmit={handleSubmit}>
              <input placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input placeholder="Nome completo" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
              <input placeholder="Celular" type="text" value={cel} onChange={(e)=>setCel(e.target.value)}/>
              <input placeholder="Endereço" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              <button type="submit">Inscrever-se</button>
              <button onClick={() => ShowDataInLocalstorage('@IFlow:data')}>Consultar</button>
            </Form>
          </FormComponent>

        </Register>
      </Content>
      <Footer>
        <TextFooter> © Developed by IFlow - Direitos Reservados.</TextFooter>
      </Footer>
    </Container>
  );
};

export default LandingPage;
