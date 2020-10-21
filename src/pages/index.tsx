import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Página inicial</h1>
    </Container>
  );
};

export default Home;
