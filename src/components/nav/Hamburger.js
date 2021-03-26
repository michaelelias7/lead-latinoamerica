import styled from 'styled-components';
import { useRef, useState } from 'react';

const Hamburger = (props) => {

  const menuBtn = useRef();
  const [ menuOpen, setMenuOpen ] = useState(false);

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
    console.log('MENU OPEN: ', menuOpen);
  }

  return (
    <Menu ref={menuBtn} onClick={clickHandler}>
      <Lines className={menuOpen ? 'open' : ''}></Lines>
    </Menu>
  )
}

export default Hamburger;

const Menu = styled.div`
  position: relative; 
  display: flex; 
  width: 50px;
  height: 50px;
  transition: all .5s ease-in-out;
  align-items: center;
  left: 20px; 
  top: 20px;
  cursor: pointer;

  div.open {
    background: rgba(0, 0, 0, 0);
  }
  div.open::before, 
  div.open::after {
    background: rgba(0, 0, 0, 1);
  }



`
  
  const Lines = styled.div`
  width: 40px;
  height: 6px; 
  border-radius:4px;
  transition: all .5s ease-in-out;
  background: #222;
  
  &::before,
  &::after {
    content: '';
    width: 40px;
    height: 6px; 
    border-radius:4px;
    transition: all .5s ease-in-out;
    background: #222;
    position: absolute;
  }

  &::before {
    transform: translateY(-12px);
  }

  &::after {
    transform: translateY(12px);
  }

  &.open {
    transform: translateX(20px);
  }

  &.open::after {
    transform: translateX(-20px) rotate(45deg);
    opacity: 1;
  }

  &.open::before {
    transform: translateX(-20px) rotate(-45deg);
    opacity: 1;
  }
`