import React,{Component} from 'react';
import {Navbar, Nav, NavbarToggler,Collapse,NavItem, NavbarBrand, Modal, ModalBody, ModalHeader, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
         isNavOpen: false,
         isModalOpen: false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.toggleNav=this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render(){
        return (
            <React.Fragment>
                 <Navbar dark expand="md">
                    <div className="container">
                     <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                     <NavbarBrand className="mr-auto text-danger" href="/home">
                     <img src="/logo.png" height="36" width="80" alt="ismVid"/>
                     </NavbarBrand>
                     <Collapse isOpen={this.state.isNavOpen} navbar>
                     <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link text-danger" to="/search">
                                <span className="fa fa-search fa-lg"/>Search
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link text-danger" to="/liked">
                                <span className="fa fa-thumbs-up fa-lg"/>Liked Videos
                            </NavLink>
                        </NavItem>
                     </Nav>
                     <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button color="danger" outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                      </Nav>
                     </Collapse>
                    </div>
                 </Navbar>
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader toggle={this.toggleModal}>
                         Login
                     </ModalHeader>
                     <ModalBody>
                        <h4>Here, Google Login Component would be present</h4>                     
                     </ModalBody>
                 </Modal>
                </React.Fragment>
        );
    }
}

export default Header;