import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/home/HomeScreen'
import EventScreen from './screens/event/EventScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/event/:id' component={EventScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
