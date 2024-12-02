import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

function FeatureCard({ icon, title, description, customStyle = "" }) {
  return (
    <StyledView className={`flex-1 p-4 rounded-lg border border-gray-700 bg-neutral-800 ${customStyle}`}>
      <StyledView className="items-start">
        <StyledImage
          source={{ uri: icon }}
          className="w-6 h-6 object-contain"
        />
      </StyledView>
      <StyledView className="mt-3">
        <StyledText className="text-base font-bold text-white">
          {title}
        </StyledText>
        <StyledText className="mt-1 text-sm text-slate-400">
          {description}
        </StyledText>
      </StyledView>
    </StyledView>
  );
}

export default FeatureCard;
