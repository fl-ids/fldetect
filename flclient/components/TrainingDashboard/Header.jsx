import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Header = ({ title, onBackPress }) => (
  <StyledView className="flex-row items-center justify-between mb-6">
    <StyledView className="flex-row items-center">
      {onBackPress && (
        <StyledTouchableOpacity onPress={onBackPress} className="mr-3">
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </StyledTouchableOpacity>
      )}
      <StyledText className="text-3xl font-bold text-white">{title}</StyledText>
    </StyledView>
    <StyledTouchableOpacity className="bg-indigo-600 rounded-full p-2">
      <MaterialCommunityIcons name="refresh" size={24} color="white" />
    </StyledTouchableOpacity>
  </StyledView>
);

export default Header;