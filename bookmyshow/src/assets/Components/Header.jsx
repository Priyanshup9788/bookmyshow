import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from '/images/icon.png'
import { IoIosOptions } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Link to="/"><Navbar.Brand href="#"><img className='icon' src={icon} /></Navbar.Brand></Link> 
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-between'>

                        <Form className="d-flex w-50">
                            <Form.Control
                                type="search"
                                placeholder="Search for movies,activites,events"
                                className="me-2 border border-1 rounded"
                                aria-label="Search"
                            />

                        </Form>

                        <div>
                            <span className='me-3'> Surat
                                <FaChevronDown />
                            </span>
                            <Button variant="danger" className='fs-6 me-4 px-3 py-1'>Login</Button>
                            <IoIosOptions className='fs-3' />
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='border-bottom border-0 shadow-sm'>
            <Container >
                <div className='d-flex justify-content-between'>
                    <Nav defaultActiveKey="/home" as="ul">

                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-bolder fs-6'>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Stream</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Plays</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Sports</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Activities</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Nav defaultActiveKey="/home" as="ul">

                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>ListYourShow</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Corporates</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Offers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-dark fw-normal fs-6'>Gift Cards</Nav.Link>
                        </Nav.Item>
                        

                    </Nav>
                </div>
            </Container>
            </div>
        </header>
    )
}

export default Header