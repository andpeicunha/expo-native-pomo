import React from 'react';

import { Box, Center, Text } from '@gluestack-ui/themed';
import { BrainCircuit } from 'lucide-react-native';

import * as T from './type';

export default function Header({ ...props }: T.HeaderProps) {
  const { label } = props;

  return (
    <Center>
      <Box bg="$red100" rounded={'$full'}>
        <Text
          paddingHorizontal={'$5'}
          paddingVertical={'$2'}
          alignContent="center"
          alignItems="center"
        >
          <BrainCircuit /> {label}
        </Text>
      </Box>
    </Center>
  );
}
