import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import features from './constants';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledLinearGradient = styled(LinearGradient);

const { width } = Dimensions.get('window');

function IntrusionDetection() {
  const navigation = useNavigation();

  const requestPermissions = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissions Required',
          'Background mode and notification permissions are needed for Privacy Guard to function properly.'
        );
      } else {
        console.log('All permissions granted');
        // Proceed with activating Privacy Guard
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleStartPress = () => {
    console.log("Start button pressed");
    // requestPermissions();
    navigation.navigate('Home');
  };

  const FeatureCard = ({ icon, title, description }) => (
    <StyledView className="w-full mb-4 bg-gray-800 rounded-xl overflow-hidden">
      <StyledLinearGradient
        colors={['#4c51bf', '#6366f1']}
        start={[0, 0]}
        end={[1, 1]}
        className="p-4 flex-row items-center"
      >
        <MaterialCommunityIcons name={icon} size={24} color="white" />
        <StyledText className="text-white font-bold ml-3">{title}</StyledText>
      </StyledLinearGradient>
      <StyledView className="p-4">
        <StyledText className="text-gray-300">{description}</StyledText>
      </StyledView>
    </StyledView>
  );

  return (
    <StyledLinearGradient
      colors={['#1a202c', '#2d3748']}
      className="flex-1"
    >
      <StyledSafeAreaView className="flex-1">
        <StyledScrollView className="flex-1">
          <StyledView className="flex-1 px-6 py-10">
            {/* Intrusion Alert Section */}
            <StyledView className="bg-red-600 rounded-xl p-6 mb-8">
              <MaterialCommunityIcons name="alert-circle" size={40} color="white" />
              <StyledText className="text-3xl font-bold text-white mt-4 mb-2">
                Intrusion Detected
              </StyledText>
              <StyledText className="text-white opacity-80">
                We've detected a potential intrusion in your network. Your privacy is our top priority.
              </StyledText>
            </StyledView>

            {/* Privacy Guard Section */}
            <StyledText className="text-2xl font-bold text-white mb-6">
              Introducing Privacy Guard
            </StyledText>

            {/* Feature Cards Section */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}

            {/* Start Button Section */}
            <StyledTouchableOpacity
              onPress={handleStartPress}
              className="mt-8"
            >
              <StyledLinearGradient
                colors={['#4c51bf', '#6366f1']}
                start={[0, 0]}
                end={[1, 1]}
                className="py-4 px-6 rounded-xl flex-row items-center justify-center"
              >
                <MaterialCommunityIcons name="shield-check" size={24} color="white" />
                <StyledText className="text-white font-bold text-lg ml-3">
                  Activate Privacy Guard
                </StyledText>
              </StyledLinearGradient>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledScrollView>
      </StyledSafeAreaView>
    </StyledLinearGradient>
  );
}

export default IntrusionDetection;