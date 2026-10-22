import styled from 'styled-components';
import {SiCoderwall} from 'react-icons/si';
import { NavLink, Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
    background: rgba(16, 21, 34, 0.82);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #2c3554;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display:flex;
    align-items: center;
`;

export const NavIcon = styled(SiCoderwall)`
 margin-right: 0.5rem;
 `;

 export const HamburgerMenu = styled.div`
    display: none;


    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        /*if clicked I want it to show = 0 if not clicked keep hidden = -100*/
        left: ${({ $open }) => ($open ? 0 : '-100%')};
        overflow-y: auto;
        opacity: 1;
        transition: all 0.5s ease;
        background: rgba(16, 21, 34, 0.97);
    }
    `;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px){
        width: 100%;
        height: auto;
    }
`;

export const NavLinks = styled(NavLink)`
    color: #b8c0cf;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 0.9rem;
    height: 100%;
    border-bottom: 3px solid transparent;
    transition: color 0.25s ease, border-color 0.25s ease;

    &:hover {
        color: #fff;
        border-bottom-color: #2c3554;
    }

    /* active-link indicator */
    &.active {
        color: #fff;
        font-weight: 700;
        border-bottom-color: #4b59f7;
    }

    @media screen and (max-width: 960px){
        justify-content: center;
        padding: 1.4rem;
        width: 100%;
        border-bottom: none;
        border-left: 3px solid transparent;

        &:hover {
            color: #fff;
            border-bottom: none;
        }
        &.active {
            border-bottom: none;
            border-left-color: #4b59f7;
            color: #8fa0ff;
        }
    }
    `;

export const NavItemBtn = styled.li`
    margin-left: 0.6rem;

    @media screen and (max-width: 960px) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
        margin-left: 0;
    }
    `;

export const NavBtnLink = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background: #4b59f7;
    transition: background 0.25s ease, transform 0.25s ease;

    &:hover {
        background: #0467fb;
        transform: translateY(-2px);
    }
    `;
