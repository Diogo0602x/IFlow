import React, { useRef, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiMail } from 'react-icons/fi';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Input from '../../Components/Input';
import Computador from '../../assets/pc-gamer.png';
import Notebook from '../../assets/notebook.png';
import Iphone from '../../assets/iphone_12.png';
import Tv from '../../assets/tv.png';

// import getValidationErrors from '../../utils/getValidationErrors';

import { Container } from './styles';

const LandingPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);


  const handleSubmit = useCallback(
    async (email: string, event) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(email, {
          abortEarly: false,
        });

        event.preventDefault();
        localStorage.setItem('@IFlow', email);
        window.location.reload();

        // addToast({
        //   type: 'success',
        //   title: 'Email cadastrado!',
        //   description: `Seu email foi cadastrado com sucesso`,
        // });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          // const errors = getValidationErrors(err);

          // formRef.current?.setErrors(errors);
          // addToast({
          //   type: 'error',
          //   title: 'Erro na autenticação',
          //   description:
          //     'Ocorreu um erro ao fazer login, cheque as credenciais',
          // });

          return;
        }
        // addToast({
        //   type: 'error',
        //   title: 'Erro na autenticação',
        //   description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        // });
      }
    },
    [],
  );


  return (
    <Container>
      <Header />
      <Item title="Computador" img={Computador} />
      <Item title="Notebook" img={Notebook} />
      <Item title="Iphone" img={Iphone} />
      <Item title="Tv" img={Tv} />
      <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="email" icon={FiMail} placeholder="E-mail" />
      <button type="submit">inscrever-se</button>
      </Form>

    </Container>
  );
};

export default LandingPage;
