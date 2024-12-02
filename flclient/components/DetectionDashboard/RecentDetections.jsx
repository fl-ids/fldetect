import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styled } from 'nativewind';
import DetectionItem from './DetectionItem';

const StyledView = styled(View);
const StyledText = styled(Text);

const pastDetections = [
  { id: '1', type: 'Malicious App Installation', timestamp: '2023-10-01 14:30', severity: 'High' },
  { id: '2', type: 'Unauthorized Root Access', timestamp: '2023-10-02 09:15', severity: 'Critical' },
  { id: '3', type: 'Suspicious API Call', timestamp: '2023-10-03 11:45', severity: 'Medium' },
  { id: '4', type: 'Abnormal Data Usage', timestamp: '2023-10-04 16:20', severity: 'Low' },
  { id: '5', type: 'Potential Data Exfiltration', timestamp: '2023-10-05 08:50', severity: 'High' },
];

const RecentDetections = () => (
  <StyledView className="bg-gray-800 rounded-xl p-4">
    <StyledText className="text-xl font-semibold text-white mb-4">Recent Detections</StyledText>
    <FlatList
      data={pastDetections}
      renderItem={({ item }) => <DetectionItem item={item} />}
      keyExtractor={item => item.id}
      scrollEnabled={false}
    />
  </StyledView>
);

export default RecentDetections;