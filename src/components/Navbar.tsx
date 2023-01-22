import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FiArchive } from 'react-icons/fi'
import { useShoppingCart } from './../context/shopingCartContext';
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <NavbarBs className="bg-white shadow-sm">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>

                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button variant="light" onClick={openCart} className="basket">
                        <span>{cartQuantity}</span>
                        <FiArchive />
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}
