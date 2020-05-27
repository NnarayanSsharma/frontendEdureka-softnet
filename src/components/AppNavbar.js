import React, { Component } from 'react'
import SignUpModal from './SignUpModal'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
  
  class AppNavbar extends Component {
    state = {
        isOpen: false,
        modalSignUp: false,
        modalSignIn: false,
    }
    
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    toggleSignUp = () => {
        this.setState({
            modalSignUp: !this.state.modalSignUp
        })
    }

    toggleSignIn = () => {
        this.setState({
            modalSignIn: !this.state.modalSignIn
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5 navBar">
                    <Container>
                        <NavbarBrand href="/">Edeureka</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleSignIn}>
                                        LogIn
                                    </NavLink>
                                    <Modal
                                        className="modal"
                                        isOpen={this.state.modalSignIn}
                                        toggle={this.toggleSignIn}
                                    >
                                        <ModalHeader toggle={this.toggleSignIn}>
                                            SignIn
                                        </ModalHeader>
                                        <ModalBody>
                                            <Form>
                                                <FormGroup>
                                                    <Label for="item">Email</Label>
                                                    <Input 
                                                        type="email" 
                                                        name="name"
                                                        id="item"
                                                        placeholder="Example@xyz.com"
                                                    />
                                                    <Label for="item">Password</Label>
                                                    <Input 
                                                        type="password" 
                                                        name="password"
                                                        id="item"
                                                        placeholder="Password"
                                                    />
                                                    <Button
                                                        color="dark"
                                                        style={{marginTop: '2rem'}}
                                                        block
                                                    >Signip</Button>

                                                    <p>Don't have an account? <a href="/">SignUp</a> </p>

                                                </FormGroup>
                                            </Form>
                                        </ModalBody>

                                    </Modal>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleSignUp}>
                                        SignUp
                                    </NavLink>
                                    <Modal
                                        className="modal"
                                        isOpen={this.state.modalSignUp}
                                        toggle={this.toggleSignUp}
                                    >
                                        <ModalHeader toggle={this.toggleSignUp}>
                                            SignUp
                                        </ModalHeader>
                                        <ModalBody>
                                            <Form>
                                                <FormGroup>
                                                    <Label for="item">Email</Label>
                                                    <Input 
                                                        type="email" 
                                                        name="name"
                                                        id="item"
                                                        placeholder="Example@xyz.com"
                                                    />
                                                    <Label for="item">Name</Label>
                                                    <Input 
                                                        type="text" 
                                                        name="name"
                                                        id="item"
                                                        placeholder="Example"
                                                    />
                                                    <Label for="item">Password</Label>
                                                    <Input 
                                                        type="password" 
                                                        name="password"
                                                        id="item"
                                                        placeholder="Password"
                                                    />
                                                    <Button
                                                        color="dark"
                                                        style={{marginTop: '2rem'}}
                                                        block
                                                    >SignUp</Button>

                                                    <p>Already have an account? <a href="/">Log In</a> </p>

                                                </FormGroup>
                                            </Form>
                                        </ModalBody>

                                    </Modal>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar
