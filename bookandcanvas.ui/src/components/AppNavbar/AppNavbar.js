import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Navbar, Nav, NavLink, NavItem, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';

import './AppNavbar.scss';

class AppNavbar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool.isRequired,
    }

    state= {
      isOpen: false,
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

      logMeOut = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
      }

      render() {
        const { authed } = this.props;
        const buildNavbar = () => {
          if (authed) {
            return (
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink tag={RRNavLink} to='/'>Landing Page</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={RRNavLink} to='/addUser'>Add User</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink onClick={this.logMeOut}>Logout</NavLink>
                      </NavItem>
                    </Nav>
            );
          }
          return <Nav className="ml-auto" navbar />;
        };

        return (
                <div className="MyNavbar">
                  <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Books &amp; Canvas</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      {buildNavbar()}
                    </Collapse>
                  </Navbar>
                </div>
              );
        }
    }

export default AppNavbar;