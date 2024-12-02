import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart, BarChart } from 'react-native-chart-kit';
import DetailItem from './DetailItem';

const StyledView = styled(View);
const StyledText = styled(Text);

const screenWidth = Dimensions.get('window').width;

const TrainingDetail = ({ training }) => (
  <StyledView className="bg-gray-800 rounded-xl p-6">
    <StyledView className="flex-row flex-wrap justify-between mb-6">
      <DetailItem icon="clock-outline" label="Duration" value={training.duration} />
      <DetailItem icon="database" label="Data Size" value={training.dataSize} />
      <DetailItem icon="refresh" label="Epochs" value={training.epochs.toString()} />
      <DetailItem icon="chart-line" label="Accuracy" value={`${(training.accuracy * 100).toFixed(2)}%`} />
    </StyledView>

    <StyledText className="text-white font-bold text-xl mt-6 mb-4">Resource Utilization</StyledText>
    <BarChart
      data={{
        labels: ['CPU', 'GPU', 'RAM'],
        datasets: [{ data: [65, 80, 50] }]
      }}
      width={screenWidth - 60}
      height={220}
      yAxisSuffix="%"
      chartConfig={{
        backgroundColor: '#1e2632',
        backgroundGradientFrom: '#1e2632',
        backgroundGradientTo: '#3a4b66',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{ marginVertical: 8, borderRadius: 16 }}
    />

    <StyledText className="text-white font-bold text-xl mt-6 mb-4">Training Progress</StyledText>
    <LineChart
      data={{
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        datasets: [{ data: [0.5, 0.6, 0.7, 0.75, 0.8, 0.82, 0.85, 0.87, 0.9, 0.92] }]
      }}
      width={screenWidth - 60}
      height={220}
      yAxisSuffix=""
      yAxisLabel="Acc "
      chartConfig={{
        backgroundColor: '#1e2632',
        backgroundGradientFrom: '#1e2632',
        backgroundGradientTo: '#3a4b66',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      bezier
      style={{ marginVertical: 8, borderRadius: 16 }}
    />
  </StyledView>
);

export default TrainingDetail;