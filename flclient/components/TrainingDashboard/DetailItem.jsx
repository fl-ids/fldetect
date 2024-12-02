import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);

const DetailItem = ({ icon, label, value }) => (
  <StyledView className="w-[48%] flex-row items-center mb-4">
    <StyledView className="bg-indigo-600 rounded-full p-2 mr-2">
      <MaterialCommunityIcons name={icon} size={20} color="white" />
    </StyledView>
    <StyledView>
      <StyledText className="text-gray-400 text-sm">{label}</StyledText>
      <StyledText className="text-white font-semibold">{value}</StyledText>
    </StyledView>
  </StyledView>
);

export default DetailItem;