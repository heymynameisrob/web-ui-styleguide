import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-feather';

export const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <SectionTitle title={title} />
      {children}
    </StyledSection>
  )
}

const SectionTitle = ({ title }) => {
  return (
    <StyledTitleWrap id={`#${slugify(title)}`}>
      <h2>{title}</h2>
      {/* <AnchorLink path={`#${slugify(title)}`} /> */}
    </StyledTitleWrap>
  );
};

export const Grid = ({ cols, children }) => {
  return <StyledGrid cols={cols}>{children}</StyledGrid>
}

const AnchorLink = ({ path }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const anchorEl = useRef(null);
  return <StyledIconButton ref={anchorEl}><Link color="#444" width={16} /></StyledIconButton>
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

const StyledSection = styled.section`
  display:block;
  padding-bottom:3rem;
  border-bottom:1px solid #f5f5f5;
`

const StyledTitleWrap = styled.div`
  display:block;
  padding:3rem 0 1.5rem 0;

  h2 {
    font-size:24px;
    margin:0;
    font-weight:bold;
  }
`

const StyledGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(${props => props.cols || 3}, 1fr);
  grid-gap:1.5rem;
  height:100%;  
`

const StyledIconButton = styled.a`
  display:grid;
  place-items:center;
  width:2rem;
  height:2rem;
  border-radius:50%;
  background:transparent;
  cursor:pointer;

  &:hover {
    background:#d8d8d8;
  }
`