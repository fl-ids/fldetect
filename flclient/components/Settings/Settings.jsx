import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledSwitch = styled(Switch);
const StyledImage = styled(Image);
const StyledLinearGradient = styled(LinearGradient);
const StyledSafeAreaView = styled(SafeAreaView);

const SettingItem = ({ icon, title, description, value, onValueChange, type = "switch" }) => (
  <StyledView className="flex-row items-center justify-between py-3 border-b border-gray-700">
    <StyledView className="flex-row items-center flex-1">
      <StyledView className="bg-indigo-600 rounded-full p-2 mr-3">
        <MaterialCommunityIcons name={icon} size={20} color="white" />
      </StyledView>
      <StyledView className="flex-1">
        <StyledText className="text-white font-semibold">{title}</StyledText>
        <StyledText className="text-gray-400 text-xs">{description}</StyledText>
      </StyledView>
    </StyledView>
    {type === "switch" && (
      <StyledSwitch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
      />
    )}
    {type === "button" && (
      <StyledTouchableOpacity
        className="bg-red-600 rounded-full px-3 py-1"
        onPress={onValueChange}
      >
        <StyledText className="text-white font-semibold text-sm">Detach</StyledText>
      </StyledTouchableOpacity>
    )}
  </StyledView>
);

const SettingsPage = () => {
  const [participateInTraining, setParticipateInTraining] = useState(true);
  const [shareAnonymousData, setShareAnonymousData] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleDetachClient = () => {
    // Logic to detach client from trainings
    console.log("Detaching client from trainings");
  };

  return (
    <StyledLinearGradient
      colors={['#1a202c', '#2d3748']}
      className="flex-1"
    >
      <StyledSafeAreaView className="flex-1">
        <StyledScrollView className="flex-1">
          <StyledView className="px-4 py-2">
            <StyledView className="flex-row items-center mb-4">
              <StyledImage
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                className="w-16 h-16 rounded-full mr-4"
              />
              <StyledView>
                <StyledText className="text-white font-bold text-xl">John Doe</StyledText>
                <StyledText className="text-gray-400 text-sm">Security Analyst</StyledText>
              </StyledView>
            </StyledView>

            <StyledView className="bg-gray-800 rounded-xl p-3 mb-4">
              <StyledText className="text-white font-bold text-lg mb-2">Training Statistics</StyledText>
              <StyledView className="flex-row justify-between">
                <StyledView className="items-center">
                  <StyledText className="text-indigo-400 font-bold text-xl">15</StyledText>
                  <StyledText className="text-gray-400 text-xs">Trainings</StyledText>
                </StyledView>
                <StyledView className="items-center">
                  <StyledText className="text-green-400 font-bold text-xl">98.5%</StyledText>
                  <StyledText className="text-gray-400 text-xs">Accuracy</StyledText>
                </StyledView>
                <StyledView className="items-center">
                  <StyledText className="text-yellow-400 font-bold text-xl">5.2 GB</StyledText>
                  <StyledText className="text-gray-400 text-xs">Data Contributed</StyledText>
                </StyledView>
              </StyledView>
            </StyledView>

            <StyledText className="text-white font-bold text-lg mb-2">Settings</StyledText>

            <StyledView className="bg-gray-800 rounded-xl p-3 mb-4">
              <SettingItem
                icon="brain"
                title="Participate in Training"
                description="Allow your device to participate in federated learning"
                value={participateInTraining}
                onValueChange={setParticipateInTraining}
              />
              <SettingItem
                icon="database-export"
                title="Share Anonymous Data"
                description="Contribute anonymized data to improve the model"
                value={shareAnonymousData}
                onValueChange={setShareAnonymousData}
              />
              <SettingItem
                icon="theme-light-dark"
                title="Dark Mode"
                description="Toggle dark mode for the app"
                value={darkMode}
                onValueChange={setDarkMode}
              />
              <SettingItem
                icon="bell-ring"
                title="Notifications"
                description="Receive alerts about trainings and updates"
                value={notifications}
                onValueChange={setNotifications}
              />
              <SettingItem
                icon="lan-disconnect"
                title="Detach from Trainings"
                description="Temporarily stop participating in all trainings"
                type="button"
                onValueChange={handleDetachClient}
              />
            </StyledView>

            <StyledTouchableOpacity className="bg-red-600 rounded-xl p-3 mt-2 flex-row items-center justify-center">
              <MaterialCommunityIcons name="logout" size={20} color="white" />
              <StyledText className="text-white font-semibold text-lg ml-2">Log Out</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledScrollView>
      </StyledSafeAreaView>
    </StyledLinearGradient>
  );
};

export default SettingsPage;