import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './About';
import Contact from './Contact';
import Register from './register';
import Home from './Home';
import { Link, Route, BrowserRouter as Router,Switch } from '../../node_modules/react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  const name = "Akshit";
  const isUser = true;
  return (

    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Akshit</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/Contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/Register">Register</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <About name="NAME"/> */}
        {/* <Contact /> */}
        {/* {<Register />} */}

      </Router>
    </div>
  );
}

export default App;
