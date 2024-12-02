import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { LineChart } from 'react-native-chart-kit';

const StyledView = styled(View);
const StyledText = styled(Text);

const screenWidth = Dimensions.get('window').width;

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [3, 7, 2, 5, 9, 4, 6],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    }
  ]
};

const WeeklyTrendChart = () => (
  <StyledView className="bg-gray-800 rounded-xl p-4 mb-6">
    <StyledText className="text-xl font-semibold text-white mb-4">Weekly Detection Trend</StyledText>
    <LineChart
      data={chartData}
      width={screenWidth - 50}
      height={220}
      chartConfig={{
        backgroundColor: '#1e2632',
        backgroundGradientFrom: '#1e2632',
        backgroundGradientTo: '#3a4b66',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  </StyledView>
);

export default WeeklyTrendChart;