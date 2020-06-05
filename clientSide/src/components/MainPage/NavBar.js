
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import LogOutModal from './LogoutModal';

const NavBarr = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
        <Navbar className="m-0 p-0" dark expand="md" style={{'backgroundColor': '#875a7b'}}>
            <NavbarBrand href="/">Mirë se erdhët: { props.userName }</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/components/">Të gjitha biletat</NavLink>
                    </NavItem>
                    <NavItem>
                        <LogOutModal></LogOutModal>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
  );
}

export default NavBarr;