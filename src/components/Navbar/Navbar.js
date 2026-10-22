import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, NavIcon, HamburgerMenu, NavMenu, NavItem, NavLinks, NavItemBtn,NavBtnLink } from './navbar.elements'

const links = [
    { to: '/', label: 'Home', exact: true },
    { to: '/about', label: 'About' },
    { to: '/photography', label: 'Photography' },
    { to: '/projects', label: 'Projects' },
    { to: '/casestudy', label: 'Case Study' },
    { to: '/bucketlist', label: 'Bucket List' },
];

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMenu}>
                        <NavIcon/>
                        PS
                    </NavLogo>
                    <HamburgerMenu onClick={handleClick}>
                       {click ? <FaTimes /> : <FaBars /> }
                    </HamburgerMenu>
                    <NavMenu onClick={closeMenu} $open={click}>
                        {links.map(({ to, label, exact }) => (
                            <NavItem key={to}>
                                <NavLinks to={to} exact={exact}>{label}</NavLinks>
                            </NavItem>
                        ))}
                        <NavItemBtn>
                            <NavBtnLink to="/cv">View CV</NavBtnLink>
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
