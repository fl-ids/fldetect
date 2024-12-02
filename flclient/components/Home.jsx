import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledLinearGradient = styled(LinearGradient);

const { width } = Dimensions.get('window');

const HomePage = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  const startButtonPress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      console.log('Security check started');
    });
  };

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(StyledTouchableOpacity);

  return (
    <StyledLinearGradient
      colors={['#1a202c', '#2d3748']}
      className="flex-1"
    >
      <StyledView className="flex-1 p-6">
        <StyledText className="text-3xl font-bold text-white mb-8 mt-12">Security Center</StyledText>
        
        <AnimatedTouchableOpacity 
          className="bg-indigo-600 rounded-3xl shadow-lg overflow-hidden mb-6"
          style={{
            transform: [{ scale: scaleValue }],
          }}
          onPress={startButtonPress}
        >
          <StyledLinearGradient
            colors={['#4c51bf', '#6366f1']}
            start={[0, 0]}
            end={[1, 1]}
            className="p-6 flex-row items-center justify-between"
          >
            <StyledView>
              <StyledText className="text-2xl font-bold text-white mb-2">Start Security Check</StyledText>
              <StyledText className="text-white opacity-80">Scan your system now</StyledText>
            </StyledView>
            <MaterialCommunityIcons name="shield-check" size={60} color="white" />
          </StyledLinearGradient>
        </AnimatedTouchableOpacity>

        <StyledView className="flex-row justify-between mb-6">
          <StyledTouchableOpacity 
            className="bg-purple-600 rounded-3xl shadow-lg overflow-hidden"
            style={{ width: width * 0.43 }}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <StyledLinearGradient
              colors={['#6b46c1', '#805ad5']}
              start={[0, 0]}
              end={[1, 1]}
              className="p-4 items-center justify-center aspect-square"
            >
              <MaterialCommunityIcons name="book-open-variant" size={40} color="white" className="mb-2" />
              <StyledText className="text-lg font-semibold text-white text-center">Training Dashboard</StyledText>
            </StyledLinearGradient>
          </StyledTouchableOpacity>

          <StyledTouchableOpacity 
            className="bg-pink-600 rounded-3xl shadow-lg overflow-hidden"
            style={{ width: width * 0.43 }}
            onPress={() => navigation.navigate('DetectionDashboard')}
          >
            <StyledLinearGradient
              colors={['#d53f8c', '#ed64a6']}
              start={[0, 0]}
              end={[1, 1]}
              className="p-4 items-center justify-center aspect-square"
            >
              <MaterialCommunityIcons name="radar" size={40} color="white" className="mb-2" />
              <StyledText className="text-lg font-semibold text-white text-center">Detection Dashboard</StyledText>
            </StyledLinearGradient>
          </StyledTouchableOpacity>
        </StyledView>

        <StyledTouchableOpacity 
          className="bg-teal-600 rounded-3xl shadow-lg overflow-hidden"
          onPress={() => console.log('Security Tips pressed')}
        >
          <StyledLinearGradient
            colors={['#319795', '#38b2ac']}
            start={[0, 0]}
            end={[1, 1]}
            className="p-6 flex-row items-center justify-between"
          >
            <StyledView>
              <StyledText className="text-xl font-bold text-white mb-1">Security Tips</StyledText>
              <StyledText className="text-white opacity-80">Learn best practices</StyledText>
            </StyledView>
            <MaterialCommunityIcons name="lightbulb-on" size={40} color="white" />
          </StyledLinearGradient>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledLinearGradient>
  );
};

export default HomePage;