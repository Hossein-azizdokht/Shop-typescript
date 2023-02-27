import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from './../../context/shopingCartContext';
import { FiArchive } from 'react-icons/fi';

function Header() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <>
          
                <Navbar bg="white" variant="light" expand='lg' className="mb-3 position-sticky top-0">
                    <Container>
                        <Navbar.Brand href="#" className='me-auto pe-5'>
                            <img src='./img/logo.svg' width='150px' />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand`}
                            aria-labelledby={`offcanvasNavbarLabel-expand`}
                            placement="end"
                            
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                                </Nav>

                                <Nav.Link to="/about" as={NavLink}>Sign in</Nav.Link>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        {cartQuantity > 0 && (
                            <Button variant="default" onClick={openCart} className="basket ms-auto">
                                <span>{cartQuantity}</span>
                                <FiArchive />
                            </Button>
                        )}

                    </Container>
                </Navbar>
        
        </>
    );
}

export default Header;