import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Nav from './Nav';
import { Link } from 'gatsby';

const HomeLink = styled(Link)`
    color:#FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return (  
        <header
            css={css`
                background-color: rgba(44, 62, 80);
                margin-top: 5rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <HomeLink
                    to='/'
                >
                    <h1>Gatsby Hotel</h1>
                </HomeLink>

                <Nav />
            </div>
        </header>
    );
}
 
export default Header;