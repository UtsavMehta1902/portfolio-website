import {Navbar, Nav, Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Navbar.css';

import navIcon1 from "../../imgs/nav-icon1.svg";
import navIcon2 from "../../imgs/nav-icon2.svg";
import navIcon3 from "../../imgs/nav-icon3.svg";

export const NavBar = () => {

    const [navLink, setNavLink] = useState('home');
    const [changeBG, setChangeBG] = useState(false);

    const onGotoLink = (link) => {
        setNavLink(link);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setChangeBG(true);
            }
            else {
                setChangeBG(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar expand="md" className={ changeBG ? "changeBG" : ""}>
        <div className='container'>
            <Nav className="ms-auto nav-link-container">
                <Nav.Link href="#home" className={navLink === 'home' ? 'active-link navbar-link' : 'navbar-link'} onClick = {() => onGotoLink('home')}>Home</Nav.Link>
                <Nav.Link href="#blog" className={navLink === 'blog' ? 'active-link navbar-link' : 'navbar-link'} onClick = {() => onGotoLink('blog')}>Blog</Nav.Link>
                <Nav.Link href="#Projects" className={navLink === 'projects' ? 'active-link navbar-link' : 'navbar-link'} onClick = {() => onGotoLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-handles'>
                <div className='social-icon'>
                    <a href='#'><img src = {navIcon1} alt = ""/></a>
                    <a href='#'><img src = {navIcon2} alt = ""/></a>
                    <a href='#'><img src = {navIcon3} alt = ""/></a>
                </div>

                <button className='btn-contact' onClick={()=>{console.log('connect')}}>Connect With Me</button>
            </span>
        </div>
        </Navbar>
  );
}