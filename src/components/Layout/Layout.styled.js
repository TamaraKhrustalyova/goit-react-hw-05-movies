import {styled} from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Header = styled.header`
    display: flex;
    align-items: center;
    background-color: rgb(217, 216, 216);
    margin-bottom: 20px;
    height: 60px;
    padding-left: 40px;
`

export const NavList = styled.ul`
    display: flex;
    text-align: center;
    font-size: 20px;
    gap: 15px;
`

export const NavItem = styled.li``

export const StyledLink = styled(NavLink)`
    color: #212121;
    text-decoration: none;

    &.active {
        color: orangered;
    }
`;