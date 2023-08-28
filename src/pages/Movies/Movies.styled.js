import { styled } from "styled-components";

export const SearchForm = styled.form`
    margin-bottom: 20px;
`

export const InputItem = styled.input`
    width: 300px;
    height: 30px;
    margin-right: 5px;
    font-size: 16px;
    outline: none;
    border: 1px solid black;
    border-radius: 3px;
    
    &:focus {
        border 1px solid transparent;
    }
`
export const Button = styled.button`
    height: 34px;
    font-size: 16px;
    background-color: ##fbe1ba;
    border-radius: 3px;
    border: 1px solid black;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1; 
        color: orangered;
    }
`