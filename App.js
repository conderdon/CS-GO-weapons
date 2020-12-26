import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button,} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.png'
import Terrorists from './pages/terrorists.js'
import Ctr from './pages/ctr.js'  
import MainP from './pages/mainp.js'
import Cguns from './pages/cguns.js'
import cswr from './cswrt.png'    


function App() {
  return (
    

   <div className="App">
      


  <img id="cswr" src={cswr}/>

   <Carousel>
  <Carousel.Item>
    <img
      className="d-block-w-100"
      src="https://i.pinimg.com/originals/df/4c/3d/df4c3df4835ba98f79ec915cdbb53805.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block-w-100"
      src="https://delta-game.ru/wp-content/uploads/2018/07/pcforcsgo.png" 
      alt="Second slide"     
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block-w-100"
      src="https://cdn.gamestatic.net/files/editor_uploads/%D0%9D/cs%20go%20covid%2019.jpg"
      alt="Third slide"
      
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>







<Navbar expand="lg">
  <Navbar.Brand id="navbrand1"><img src={logo} width="70"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home"><a>Home</a></Nav.Link>
      <Nav.Link href="/tr"><a>Terrorists</a></Nav.Link>
      <Nav.Link href="/ctr"><a>Special fources</a></Nav.Link>
      <Nav.Link href="/cguns"><a>Common guns</a></Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
   </Navbar>
      



 <Router>
       <Switch>
          <Route exact path="/tr"component={Terrorists}/>
          <Route exact path="/home"component={MainP}/>
          <Route exact path="/ctr"component={Ctr}/>
           <Route exact path="/cguns"component={Cguns}/>
       </Switch>
   </Router>
 </div>

  );
}

export default App;
