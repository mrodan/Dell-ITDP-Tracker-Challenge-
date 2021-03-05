import React, { useContext } from 'react'
import { AuthContext } from './context/authContext.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './hocs/PrivateRoute'
import PublicRoute from './hocs/PublicRoute'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/home/HomeScreen'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import UserScreen from './screens/userScreen/UserScreen'
import EventScreen from './screens/event/EventScreen'
import NewEventScreen from './screens/newEvent/NewEventScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <PublicRoute path='/login' component={LoginScreen}/>
          <PublicRoute path='/register' component={RegisterScreen}/>
          <PrivateRoute path='/events/:id' roles={["P", "CL", "PM"]} component={EventScreen}/>
          <PrivateRoute path='/users/:id' roles={["P", "CL", "PM"]} component={UserScreen}/>
          <PrivateRoute path='/newevent' roles={["PM"]} component={NewEventScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
