import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import DetectionItem from './DetectionItem';
import { mobileIntrusionTypes } from '../constants';

const StyledView = styled(View);
const StyledText = styled(Text);

const RealtimeDetections = () => {
  const [realtimeDetections, setRealtimeDetections] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDetection = {
        id: Date.now().toString(),
        type: mobileIntrusionTypes[Math.floor(Math.random() * mobileIntrusionTypes.length)],
        timestamp: new Date().toLocaleString(),
        severity: ['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)]
      };
      setRealtimeDetections(prev => [newDetection, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledView className="bg-gray-800 rounded-xl p-4 mb-6">
      <StyledText className="text-xl font-semibold text-white mb-2">Real-time Detections</StyledText>
      {realtimeDetections.map(detection => (
        <DetectionItem key={detection.id} item={detection} />
      ))}
    </StyledView>
  );
};

export default RealtimeDetections;