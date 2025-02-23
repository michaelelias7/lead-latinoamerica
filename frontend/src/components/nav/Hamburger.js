import styled from 'styled-components';
import { useRef, useState } from 'react';

const Hamburger = (props) => {

  const lineHeight = 6;
  const lineWidth = 40;

  const menuBtn = useRef();
  const [ menuOpen, setMenuOpen ] = useState(false);

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
    console.log('MENU OPEN: ', menuOpen);
  }

  return (
    <Menu ref={menuBtn} onClick={clickHandler}>
      <Lines 
        className={menuOpen ? 'open' : ''}
        lineHeight={lineHeight}
        lineWidth={lineWidth}
      >

      </Lines>
    </Menu>
  )
}

export default Hamburger;

const Menu = styled.div`
  position: relative; 
  display: flex; 
  width: 50px;
  transition: all .5s ease-in-out;
  align-items: center;
  left: 20px; 
  top: 10px;
  height: 50px;
  cursor: pointer;

  div.open {
    background: rgba(3, 4, 94, 0);
  }
  div.open::before, 
  div.open::after {
    background: rgba(3, 4, 94, 1);
  }
`
  
  const Lines = styled.div`
  width: ${props => props.lineWidth}px;
  height: ${props => props.lineHeight}px; 
  border-radius:4px;
  transition: all .5s ease-in-out;
  background: rgb(3, 4, 94);
  
  &::before,
  &::after {
    content: '';
    width: ${props => props.lineWidth}px;
    height: ${props => props.lineHeight}px; 
    border-radius:4px;
    transition: all .5s ease-in-out;
    background: rgb(3, 4, 94);
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