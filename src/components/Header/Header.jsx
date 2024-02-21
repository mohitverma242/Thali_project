import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header=()=>{
    const cart=useSelector((state)=>state.restroThali.cart)
    return(
     <div className="container-fluid m-0">
      <Navbar bg="success" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/" className='fs-2 fw-bold text-decoration-underline fst-italic text-danger'>Food Delight</Navbar.Brand>
        <Nav className="ms-3 d-flex gap-4">
          <NavLink to="/"className='fs-6 fw-bold text-dark text-decoration-none'><button className='btn btn-light border-none fw-bold'>Home</button></NavLink>
          <NavLink to="/checkout" className='fs-6 fw-bold text-success text-decoration-none '><button type="button" className="btn btn-light border-none fw-bold h-100 position-relative">
          <FaShoppingCart  /> Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></NavLink>
        </Nav>
      </Container>
    </Navbar>
    </div>
    )
}

export default Header;