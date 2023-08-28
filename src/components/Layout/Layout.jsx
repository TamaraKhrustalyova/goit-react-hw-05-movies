import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'; 
import {NavList, NavItem, StyledLink, Header} from './Layout.styled'


export const Layout = () => {
    return (
        <>
        
            <Header className='container'>
                <NavList>
                    <NavItem>
                        <StyledLink to='/'>Home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to='/Movies'>Movies</StyledLink>
                    </NavItem>
                </NavList>
            </Header>
       
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}
