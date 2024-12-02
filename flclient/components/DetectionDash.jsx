import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styled } from 'nativewind';
import RealtimeDetections from './DetectionDashboard/ReamTimeDetection';
import WeeklyTrendChart from './DetectionDashboard/WeeklyTrendChart';
import RecentDetections from './DetectionDashboard/RecentDetections';


const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);

const DetectionDashboard = () => {
  return (
    <StyledScrollView className="flex-1 bg-gray-900 p-4">
      <StyledText className="text-2xl font-bold text-white mb-4">Detection Dashboard</StyledText>
      <RealtimeDetections />
      <WeeklyTrendChart />
      <RecentDetections />
    </StyledScrollView>
  );
};

export default DetectionDashboard;