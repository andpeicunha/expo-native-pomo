import { styled, StyledProvider } from '@gluestack-style/react';
import React from 'react';
import { View } from 'react-native';
import { config } from './gluestack-style.config';
import Container from './src/components/container';

const Header = styled(View, {
  backgroundColor: 'blue',
  flex: 0.3,
});

const App = () => {
  return (
    <StyledProvider config={config}>
      <Container />
    </StyledProvider>
  );
};

export default App;
