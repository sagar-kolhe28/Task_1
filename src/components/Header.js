import React from 'react';
import { Navbar } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, Nav, Collapse, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';


const Header = () => {
  return (
    <div>
    <Navbar
      color="light"
      expand="md"
      light>
      <NavbarBrand href="/">
        LOGO
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          
        </Nav>
        <NavbarText>
          User_Name
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>
  );
};

export default Header;