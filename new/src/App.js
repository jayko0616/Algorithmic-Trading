import React from 'react';
import { Container } from 'react-bootstrap';
import ApexChart from './ApexChart';
import CoinList from './CoinList';
import Layout from './Layout/Layout';


export default function App(){
  return(
    <Layout>
      <Container style={{minHeight:'75vh'}}>
      </Container>
    </Layout>
  );
}

