import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button} from '../../globalStyles'
import {Nav, NavbarContainer, NavLogo, NavIcon, HamburgerMenu, NavMenu, NavItem, NavLinks, NavItemBtn,NavBtnLink } from './navbar.elements'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={handleClick} click={click}>
                        <NavIcon/>
                        PS
                    </NavLogo>
                    <HamburgerMenu onClick={handleClick}>
                       {click ? <FaTimes /> : <FaBars /> } 
                    </HamburgerMenu>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/cv'>CV</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/photography'>Photography</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/case study'>Case Study</NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            { button ? (<NavBtnLink to="/bucketlist">
                                <Button primary>BucketList</Button> 
                            </NavBtnLink>): (<NavBtnLink to="/bucketlist">
                                <Button fontBig primary>
                                    BucketList
                                </Button>
                            </NavBtnLink>) }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
