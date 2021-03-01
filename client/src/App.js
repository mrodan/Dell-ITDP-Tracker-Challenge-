import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/home/HomeScreen'


function App() {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
