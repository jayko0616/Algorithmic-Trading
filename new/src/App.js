import React from 'react';
import { Container } from 'react-bootstrap';
import ApexChart from './ApexChart';
import CoinList from './CoinList';
import Layout from './Layout/Layout';
import CoinStore from './CoinStore';
// import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"


// function Home(){
//   return(
//     <Link to = "/Next">
//       <h1>혁이는 코딩중..</h1>
//     </Link>

//   )
// }


// function Next(){
//   return(
//     <div>
//       <h1>다같이 열심히 코딩 중!!</h1>
//     </div>
//   )
// }


export default function App(){
  return(
    <CoinStore>
      <Layout>
        <Container style={{minHeight:'75vh'}}>
        </Container>
      </Layout>
    </CoinStore>
  );
}

