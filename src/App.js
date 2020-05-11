import React from 'react';
import styled from 'styled-components';
import data from './data/metadata.json';
import Sections from './sections';

const App = () => {
  return (
    <>
      <StyledHeading>
        <h1><span>{data.title} / </span>UI Styleguide</h1>
      </StyledHeading>
      <Sections />
    </>
  );
}

export default App;

const StyledHeading = styled.header`
  display:block;
  padding:3rem 0;

  h1 {
    font-size:48px;
    margin:0;
    font-weight:bold;
  }
  span {
    color:#888;
  }
`