import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

function StartButton({ onPress, title = "Start now", color = "sky", disabled = false }) {
  const baseStyle = "flex justify-center items-center px-5 py-3 rounded-xl";
  const colorVariants = {
    sky: "bg-sky-500 active:bg-sky-600",
    green: "bg-green-500 active:bg-green-600",
    red: "bg-red-500 active:bg-red-600",
  };
  
  const buttonStyle = `${baseStyle} ${colorVariants[color]} ${disabled ? 'opacity-50' : ''}`;

  return (
    <StyledTouchableOpacity 
      className={buttonStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <StyledText className="text-base font-bold text-white text-center">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
}

export default StartButton;