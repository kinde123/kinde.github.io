import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Home1() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                < Navbar.Brand href = "#home" > < img src = "assets/image/kk3.png"
                classNameName = "img-responsive"
                alt = "logo" / > < /Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Oferta</Nav.Link>
                        < Nav.Link href = "#deets" > Panel Architekta< /Nav.Link>
                        <Nav.Link href="#deets">Newsroom</Nav.Link>
                       < Nav.Link href="#deets" > Wnetrza3D < /Nav.Link>
                       <Nav.Link href="#deets">Kontact</Nav.Link>
                                {/* < Nav.Link href="#deets" > More deets < /Nav.Link>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                                    < Nav.Link href="#deets" > More deets < /Nav.Link>
                         */}
                         < div className = "d-flex" >

                             <
                             ul >
                             <
                             li >
                             <
                             span className = "social-icon social-facebook" >
                             <
                             i className = "fa fa-facebook" > < /i></span > < /li> <
                             li >
                             <
                             span className = "social-icon social-instagram" >
                             <
                             i className = "fa fa-instagram" > < /i></span > < /li>

                             <
                             /ul> <
                             div >
                             <
                             select >
                             <
                             option > PL < /option> <
                             option > EN < /option> <
                             /select> <
                             /div>

                             <
                             /div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
    
   

export default Home1;