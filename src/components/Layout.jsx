import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom'; 
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    color: #212121;

    &.active {
        color: orangered;
    }
`;

export const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <StyledLink to='/'>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/Movies'>Movies</StyledLink>
                    </li>
                </ul>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}
