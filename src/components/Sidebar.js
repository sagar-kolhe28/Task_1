import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem,  } from "reactstrap";
import Api_call from "../apis/apicall";

const Sidebar = () => {
    return (
    
        <BrowserRouter>
        
        
        <Nav vertical>
        
          <NavItem>
        <Link to="/users">
        Users
        </Link> 
            
          </NavItem>
        
           <NavItem>
            <Link to="/post">
              Posts
            </Link>
          </NavItem>

          <NavItem>
            <Link href="#">
              Albums
            </Link>
          </NavItem> 
         
         
        </Nav>
        <Switch>
        <Route path="/users" exact component={Api_call} />
        </Switch>
      </BrowserRouter>
     
    );
};

export default Sidebar;




