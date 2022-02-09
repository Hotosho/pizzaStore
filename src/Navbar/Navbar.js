import React from 'react';
import styled from 'styled-components';
import {pizzaRed} from '../Styles/Colors';
import {Title} from '../Styles/Title';

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function Navbar({login, loggedIn, logout}) {
    return (
        <NavbarStyled>
            <Logo>
                Mykyta Pizza{' '}
                <span role="img" aria-label="pizza slice">
          🍕
        </span>
            </Logo>
            <UserStatus>
                {loggedIn !== 'loading' ? (
                    <>
                        👤 {loggedIn ? 'Logged in.' : ''}
                        {loggedIn ? (
                            <LoginButton onClick={logout}> Wyloguj </LoginButton>
                        ) : (
                            <LoginButton onClick={login}> Zaloguj  / Zarejestruj </LoginButton>
                        )}
                    </>
                ) : (
                    'loading...'
                )}
            </UserStatus>
        </NavbarStyled>
    );
}
