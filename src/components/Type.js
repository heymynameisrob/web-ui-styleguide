import React from 'react';
import { Text, sx } from 'theme-ui';
import styled from 'styled-components';

export const TypeScale = ({ fontSizes }) => {
  return (
    <StyledTypeScaleList>
      <Text sx={{ fontSize: 7, lineHeight: 'heading', fontWeight: 'heading' }}>{fontSizes[7]}px Heading 1</Text>
      <Text sx={{ fontSize: 6, lineHeight: 'heading', fontWeight: 'heading' }}>{fontSizes[6]}px Heading 2</Text>
      <Text sx={{ fontSize: 5, lineHeight: 'heading', fontWeight: 'heading' }}>{fontSizes[5]}px Heading 3</Text>
      <Text sx={{ fontSize: 4, lineHeight: 'heading', fontWeight: 'heading' }}>{fontSizes[4]}px Title</Text>
      <Text sx={{ fontSize: 3, lineHeight: 'heading', fontWeight: 'heading' }}>{fontSizes[3]}px Subtitle</Text>
      <Text sx={{ fontSize: 1, lineHeight: 'heading', fontWeight: 'heading' }} variant="overline">{fontSizes[1]}px Overline</Text>
      <Text sx={{ fontSize: 2, lineHeight: 'body', color: "body" }}>{fontSizes[2]}px Body 1</Text>
      <Text sx={{ fontSize: 1, lineHeight: 'body', color: "body" }}>{fontSizes[1]}px Body 2</Text>
      <Text sx={{ fontSize: 0, lineHeight: 'body', color: "body" }}>{fontSizes[0]}px Small</Text>
    </StyledTypeScaleList>
  );
};

const StyledTypeScaleList = styled.div`
  > div {
    margin-bottom:1.5rem;
  }
`