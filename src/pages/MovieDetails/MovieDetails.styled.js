import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GoBack = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px 4px;

    background-color: ##fbe1ba;
    color: black;

    border: 1px solid black;
    border-radius: 3px;

    text-decoration: none;

    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1; 
        color: orangered;
        border-color: orangered;
    }
`
export const MovieWrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 0;
`

export const MoviePoster = styled.img`
    display: block;
    width: 30%;
`
export const GenresList = styled.span`
    margin-right: 5px;
`

export const ExtraListItem = styled.li``

export const StyledLink = styled(NavLink)`
    color: #212121;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    &.active {
        color: orangered;
    }
`

export const ExtraTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const ExtraList = styled.ul`
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
`