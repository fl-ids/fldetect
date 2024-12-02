import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';


import Header from './TrainingDashboard/Header';
import TrainingList from './TrainingDashboard/TrainingList';
import TrainingDetail from './TrainingDashboard/TrainingDetails';

const StyledScrollView = styled(ScrollView);
const StyledLinearGradient = styled(LinearGradient);

const FederatedLearningDashboard = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);

  return (
    <StyledLinearGradient
      colors={['#1a202c', '#2d3748']}
      className="flex-1"
    >
      <StyledScrollView className="flex-1 px-4 py-6">
        <Header 
          title={selectedTraining ? selectedTraining.name : "Training Dashboard"} 
          onBackPress={selectedTraining ? () => setSelectedTraining(null) : null}
        />
        
        {selectedTraining ? (
          <TrainingDetail training={selectedTraining} />
        ) : (
          <TrainingList onSelectTraining={setSelectedTraining} />
        )}
      </StyledScrollView>
    </StyledLinearGradient>
  );
};

export default FederatedLearningDashboard;