import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from './Layout/Layout';
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
      <Layout>
        <Container style={{minHeight:'75vh'}}>
        </Container>
      </Layout>
  );
}

