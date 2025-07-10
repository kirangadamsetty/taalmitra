import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/taalmitra_logo.png"
import {useNavigate} from "react-router-dom"
import redHeart from "../assets/heart_red.png"
import whiteHeart from "../assets/heart_white.png"

function Header() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="box-color fixed-top">
      <Container fluid>
        <Navbar.Brand href="#" onClick = {()=>navigate("/")}><img width= "200"  src = {logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            {/* <Nav.Link href="#action1" className= "text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className= "text-white">Link</Nav.Link>
          */}
          
         
          </Nav>
          <div style = {{position:"relative"}}>
 <img src  = {redHeart} width = "40" height = "40"/>
 <p className = "d-flex justify-content-center align-items-center" style = {{position:"absolute",top:"0", right:"0",backgroundColor:"white", height:"20px", width:"20px", borderRadius:"100%"}}>0</p>
          </div>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className = "custom-button">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;