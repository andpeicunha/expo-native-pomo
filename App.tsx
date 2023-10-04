import { styled } from 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

function App() {
  return (
    <StyledView className="flex bg-[#fff] items-center justify-center">
      <StyledText className="text-red-600 text-4xl text-center p-5">
        T ypeScript and Tailwind CSS
      </StyledText>
    </StyledView>
  );
}

export default App;
