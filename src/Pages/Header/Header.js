import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import laptopIcon from '../../images/laptop-icon.jpg'
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className='text-center'>

      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={laptopIcon}  height='30px' alt=''></img>
              Laptop Gallary
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                {
                  user && <>
                    <Nav.Link as={Link} to="/addservice">AddProduct</Nav.Link>
                    <Nav.Link as={Link} to="/manageservice">ManageProducts</Nav.Link>
                    <Nav.Link as={Link} to="/order">orders</Nav.Link>
                  </>
                }
                {user ?
                  <Nav.Link as={Link} to="/login" onClick={handleSignOut}>SignOut</Nav.Link>
                  : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;