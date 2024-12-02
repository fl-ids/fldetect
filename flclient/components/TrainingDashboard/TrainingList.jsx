import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { trainings } from '../constants';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const TrainingListItem = ({ training, onPress }) => (
  <StyledTouchableOpacity
    className="bg-gray-800 rounded-xl p-4 mb-4 flex-row justify-between items-center"
    onPress={onPress}
  >
    <StyledView className="flex-1">
      <StyledText className="text-white font-bold text-lg">{training.name}</StyledText>
      <StyledText className="text-gray-400">{training.date}</StyledText>
      <StyledView className="flex-row mt-2">
        <StyledView className="bg-indigo-600 rounded-full px-2 py-1 mr-2">
          <StyledText className="text-white text-xs">Accuracy: {(training.accuracy * 100).toFixed(2)}%</StyledText>
        </StyledView>
        <StyledView className="bg-green-600 rounded-full px-2 py-1">
          <StyledText className="text-white text-xs">Epochs: {training.epochs}</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
    <MaterialCommunityIcons name="chevron-right" size={24} color="white" />
  </StyledTouchableOpacity>
);

const TrainingList = ({ onSelectTraining }) => (
  <StyledView>
    <StyledText className="text-xl font-semibold text-white mb-4">Previous Trainings</StyledText>
    {trainings.map(training => (
      <TrainingListItem 
        key={training.id} 
        training={training} 
        onPress={() => onSelectTraining(training)}
      />
    ))}
  </StyledView>
);

export default TrainingList;