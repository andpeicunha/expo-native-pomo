import React from 'react';

import { Center, config, GluestackUIProvider, Heading, Text } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Center bg="$red50" h={'100%'} w={'100%'}>
        {/* <Header label="Focus" /> */}
        <Heading color="$red900" size={'5xl'} fontSize={'$5xl'}>
          25
        </Heading>
        <Text color="$red900" fontSize={'$2xl'}>
          00
        </Text>
      </Center>
    </GluestackUIProvider>
  );
}
