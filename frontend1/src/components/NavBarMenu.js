import React from 'react';
import {Nav, Container, Navbar, NavDropdown} from 'react-bootstrap'
import { RiHome2Line, RiMailLockLine, RiCalendar2Line, RiTeamLine, RiCarWashingFill, RiLineLine, RiVipLine, RiLogoutCircleLine } from "react-icons/ri";
import {Link} from 'react-router-dom';



function NavBarMenu(props) {
    return (
        <div className="navbar1">  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand style={{color:'red'}}  className="logout" href="/"><h2><RiLogoutCircleLine/></h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{color:'red'}} href='/'><h2><RiLogoutCircleLine/></h2></Nav.Link>
        <Nav.Link href='/chat'><h2><RiHome2Line /> </h2></Nav.Link>
        <Nav.Link href='/mesecniplan'><h2><RiMailLockLine /></h2></Nav.Link>
        <Nav.Link href='/dnevniplan'><h2><RiCalendar2Line/></h2></Nav.Link>
        <Nav.Link href='/aktivnilog' style={{color:'green'}}><h2><RiTeamLine/></h2></Nav.Link>
        <Nav.Link>
        <NavDropdown title={<h2>< RiVipLine/> </h2>} id="basic-nav-dropdown">
        <Link className="link-log" to="/dejanlog">Dejan</Link>
        <Link className="link-log" to="/jeremiclog">Jeremic</Link>
        <Link className="link-log" to="/vanelog">Vane</Link>
        <Link className="link-log" to="/angelovskilog">Mr. Angelovski</Link>
        <Link className="link-log" to="/tomolog">Tomo</Link>
        <Link className="link-log" to="/borkolog">Borko</Link>
        <Link className="link-log" to="/dinclog">Dinc</Link>
        <Link className="link-log" to="/vladalog">Vlada</Link>
        <Link className="link-log" to="/ugljesalog">Ugljesa</Link>
        <Link className="link-log" to="/mariolog">Mario</Link>
        <Link className="link-log" to="/agent001log">Agent 001</Link>
        <Link className="link-log" to="/agent002log">Agent 002</Link>
        <Link className="link-log" to="/agent003log">Agent 003</Link>
        <Link className="link-log" to="/agent004log">Agent 004</Link>
        <Link className="link-log" to="/agent005log">Agent 005</Link>
        <Link className="link-log" to="/agent006log">Agent 006</Link>
        <Link className="link-log" to="/agent007log">Agent 007</Link>
        <Link className="link-log" to="/agent008log">Agent 008</Link>
        <Link className="link-log" to="/agent009log">Agent 009</Link>
        <Link  className="link-log" to="/agent10log">Agent 10</Link>
         {/*<NavDropdown.Item href="/dejanlog">Dejan</NavDropdown.Item>
          <NavDropdown.Item href="/jeremiclog">Jeremic</NavDropdown.Item>
          <NavDropdown.Item href="/angelovskilog">Mr. Angelovski</NavDropdown.Item>
          <NavDropdown.Item href="/ugljesalog">Ugljesa</NavDropdown.Item>
          <NavDropdown.Item href="/borkolog">Borko</NavDropdown.Item>
          <NavDropdown.Item href="/dinclog">Dinc</NavDropdown.Item>
          <NavDropdown.Item href="/tomolog">Tomo</NavDropdown.Item>
          <NavDropdown.Item href="/mariolog">Mario</NavDropdown.Item>
          <NavDropdown.Item href="vladalog">Vlada</NavDropdown.Item>
          <NavDropdown.Item href="/agent001log"> Agent 001</NavDropdown.Item>
          <NavDropdown.Item href="/agent002log">Agent 002</NavDropdown.Item>
          <NavDropdown.Item href="/agent003log">Agent 003</NavDropdown.Item>
          <NavDropdown.Item href="/agent004log">Agent 004</NavDropdown.Item>
          <NavDropdown.Item href="/agent005log">Agent 005</NavDropdown.Item>
          <NavDropdown.Item href="/agent006log">Agent 006</NavDropdown.Item>
          <NavDropdown.Item href="/agent007log">Bond 007</NavDropdown.Item>
          <NavDropdown.Item href="/agent008log">Agent 008</NavDropdown.Item>
          <NavDropdown.Item href="/agent009log">Agent 009</NavDropdown.Item>
          <NavDropdown.Item href="/agent10log">Agent 10</NavDropdown.Item> */}
          <NavDropdown.Divider />
        </NavDropdown>
        </Nav.Link>
        <Nav.Link href='/chat'><h2><RiCarWashingFill/></h2></Nav.Link>
        <Nav.Link href='/chat'><h2><RiLineLine/></h2></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default NavBarMenu;