import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FiArchive } from 'react-icons/fi'
export function Navbar() {
    return (
        <NavbarBs className="bg-white shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>

                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <div className="basket">
                    <span>0</span>
                    <FiArchive />
                </div>
            </Container>
        </NavbarBs>
    )
}
