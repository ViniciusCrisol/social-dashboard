import React from 'react';
import Head from 'next/head';

import data from '../../data.json';

import HeaderCard from '../components/HeaderCard';
import OverviewCard from '../components/OverviewCard';
import { Container, Header, Content } from '../styles/pages/Home';

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

      <h1>Overview - Today</h1>

      <Content>
        {data.content.map((socialMedia: IOverviewCard) => (
          <OverviewCard data={socialMedia} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
