import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const DetectionItem = ({ item }) => (
  <StyledView className="bg-gray-800 rounded-xl p-4 mb-4 flex-row justify-between items-center">
    <StyledView className="flex-1 mr-2">
      <StyledText className="text-white font-bold">{item.type}</StyledText>
      <StyledText className="text-gray-400 text-sm">{item.timestamp}</StyledText>
    </StyledView>
    <StyledView className={`px-2 py-1 rounded-full ${
      item.severity === 'High' ? 'bg-red-500' : 
      item.severity === 'Critical' ? 'bg-purple-500' : 
      item.severity === 'Medium' ? 'bg-yellow-500' : 
      'bg-green-500'
    }`}>
      <StyledText className="text-white text-sm">{item.severity}</StyledText>
    </StyledView>
  </StyledView>
);

export default DetectionItem;