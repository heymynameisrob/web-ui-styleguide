import React from 'react';
import styled from 'styled-components';
import { darken, lighten, readableColor } from 'polished';

export const Swatch = ({ colorName, hex }) => {
  return (
    <StyledSwatchWrap bg={hex}>
      <li style={{ backgroundColor: lighten(0.2, hex), color: readableColor(lighten(0.2, hex), '#000', '#fff') }}>
        <span>Light</span>
        <span>{lighten(0.2, hex)}</span>
      </li>
      <li style={{ color: readableColor(hex, '#000', '#fff') }}>
        <span>{colorName}</span>
        <span>{hex}</span>
      </li>
      <li style={{ backgroundColor: darken(0.2, hex), color: readableColor(darken(0.2, hex), '#000', '#fff') }}>
        <span>Dark</span>
        <span>{darken(0.2, hex)}</span>
      </li>
    </StyledSwatchWrap>
  );
};
export const TextSwatch = ({ colorName, hex }) => {
  return (
    <StyledSwatchWrap bg={hex}>
      <li style={{ backgroundColor: lighten(0.5, hex), color: readableColor(lighten(0.5, hex), '#000', '#fff') }}>
        <span>Text Low</span>
        <span>{lighten(0.5, hex)}</span>
      </li>
      <li style={{ backgroundColor: lighten(0.25, hex), color: readableColor(lighten(0.25, hex), '#000', '#fff') }}>
        <span>Text Medium</span>
        <span>{lighten(0.25, hex)}</span>
      </li>
      <li style={{ color: readableColor(hex, '#000', '#fff') }}>
        <span>Text High</span>
        <span>{hex}</span>
      </li>
    </StyledSwatchWrap>
  );
};

const StyledSwatchWrap = styled.ul`
  display:block;
  list-style-type:none;   
  border:0;
  box-shadow:0 1px 8px rgba(0,0,0,0.08);

  li {
    display:flex;
    justify-content:space-between;
    border:0;
    margin:0;
    padding:1.5rem;
    background-color:${props => props.bg};      
  }
  li:first-of-type {
    border-top-left-radius:0.5rem;
    border-top-right-radius:0.5rem;    
  }
  li:last-of-type {
    border-bottom-left-radius:0.5rem;
    border-bottom-right-radius:0.5rem;
    color:#fff;
  }  
  li span:first-of-type:first-letter {
    text-transform:capitalize;
  }
`