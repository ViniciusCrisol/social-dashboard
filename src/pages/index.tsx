import React from 'react';
import Head from 'next/head';

import data from '../../data.json';

import HeaderCard from '../components/HeaderCard';
import { Container, Header } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Header>
        {data.general.map((socialMedia: IHeaderCard) => (
          <HeaderCard key={socialMedia.socialMedia} data={socialMedia} />
        ))}
      </Header>
    </Container>
  );
};

export default Home;
