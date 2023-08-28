import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const MovieList = styled.ul`
    padding-bottom: 20px;
`

export const MovieItem = styled.li`
    margin-bottom: 8px;
`

export const MovieLink = styled(Link)`
    color: black;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: orangered;
    }
`