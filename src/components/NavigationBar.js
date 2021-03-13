import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import {Link} from "react-router-dom";

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/" className="text-light">Crypto Finder</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar >
                        <Link to="/" className="text-light custom-nav-item btn ">Home</Link>
                        <Link to="/buy" className="text-light custom-nav-item btn">Buy</Link>
                        <Link to="/sell" className="text-light custom-nav-item btn">Sell</Link>
                        <Link to="/login" className="text-light custom-nav-item btn">Login</Link>
                        <Link to="/signup" className="text-light custom-nav-item btn btn-danger">Sign Up</Link>


                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
