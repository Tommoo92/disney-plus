import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="/media/images/logo.svg" />
        <NavMenu>
          <a>
            <img src="/media/images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/media/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/media/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/media/images/original-icon.svg" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/media/images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/media/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="/media/images/tommie.jfif"/>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: black;
    display: flex;
    align-items:center;
    padding: 0 36px;
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
      height: 20px;
    }

    span{
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;           
        bottom: -5px; 
        background: white;
        opacity:0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`