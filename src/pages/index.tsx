import React from 'react';
import Head from 'next/head';

import { useTheme } from '../hooks/useTheme';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <h1>Página inicial</h1>
        <button onClick={toggleTheme}>Trocar tema</button>
      </div>
    </Container>
  );
};

export default Home;
