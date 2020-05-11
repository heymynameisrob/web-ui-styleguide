import React from 'react';
import { sx, Box, Text } from 'theme-ui';
import { TypeStyle } from '@theme-ui/style-guide';
import { useTheme } from "../context";
import { Grid } from '../components/Layout';
import { Section } from '../components/Layout';

import { Swatch, TextSwatch } from '../components/Colours';
import { TypeScale } from '../components/Type';

const Sections = () => {
  const { fontSizes = [] } = useTheme();
  const { fonts } = useTheme();
  return (
    <div>
      <Section title="Colours">
        <Colours />
      </Section>
      <Section title="Typography">
        <Box sx={{ pb: 4 }}>
          <Text sx={{ color: '#888', fontSize: 1 }}>Font family</Text>
          <TypeStyle fontFamily='heading' fontWeight='heading' lineHeight='heading'>{fonts.heading}</TypeStyle>
        </Box>
        <Text sx={{ color: '#888', fontSize: 1 }}>Type options</Text>
        <TypeScale fontSizes={fontSizes} />
      </Section>
    </div>
  )
}

const Colours = () => {
  const { colors } = useTheme();
  const colourArray = Object.entries(colors);
  console.log(colourArray);
  return (
    <Grid>
      {Object.entries(colors).map(([key, value]) => {
        if (key === 'text') {
          return <TextSwatch colorName={key} hex={value} />
        } else {
          return <Swatch colorName={key} hex={value} />
        }
      })}
    </Grid>
  );
};

export default Sections;