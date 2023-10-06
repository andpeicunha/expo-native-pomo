import { styled } from '@gluestack-style/react';
import React, { ReactNode } from 'react';

import { Text, View } from 'react-native';

const Box = styled(View, {
  bg: '$primary-red-900',
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Text>{children}</Text>
    </Box>
  );
};

export default Header;
