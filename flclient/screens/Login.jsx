import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, KeyboardAvoidingView, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
// import * as SecureStore from 'expo-secure-store';
// import axios from '../api/axiosConfig';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledLinearGradient = styled(LinearGradient);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView)

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please fill all the fields.');
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!emailRegex.test(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    const payload = {
      email: trimmedEmail,
      password: trimmedPassword
    };

    try {
      const response = await axios.post('/login', payload);
      if (response.status === 200) {
        console.log("User logged in");
        navigation.navigate('HomePage');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledSafeAreaView className="flex-1">
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <StyledLinearGradient
          colors={['#1a202c', '#2d3748']}
          className="flex-1"
        >
          <StyledScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} className="px-8">
            <StyledView className="mb-12 items-center">
              <StyledView className="w-20 h-20 bg-indigo-500 rounded-full mb-4 justify-center items-center">
                <MaterialCommunityIcons name="shield-check" size={40} color="white" />
              </StyledView>
              <StyledText className="text-4xl font-bold text-white mb-2">Welcome Back</StyledText>
              <StyledText className="text-gray-300 text-lg">Login to your account</StyledText>
            </StyledView>

            <StyledView className="mb-6">
              <StyledView className="flex-row items-center bg-gray-700 rounded-xl p-4 mb-4">
                <MaterialCommunityIcons name="email-outline" size={24} color="#a0aec0" />
                <StyledTextInput
                  className="flex-1 ml-3 text-white"
                  placeholder="Email"
                  placeholderTextColor="#a0aec0"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  value={email}
                />
              </StyledView>

              <StyledView className="flex-row items-center bg-gray-700 rounded-xl p-4">
                <FontAwesome5 name="key" size={24} color="#a0aec0" />
                <StyledTextInput
                  className="flex-1 ml-3 text-white"
                  placeholder="Password"
                  placeholderTextColor="#a0aec0"
                  secureTextEntry
                  onChangeText={setPassword}
                  value={password}
                />
              </StyledView>
            </StyledView>

            <StyledTouchableOpacity
              className="bg-indigo-600 rounded-xl p-4 items-center"
              onPress={handleLogin}
              disabled={isLoading}
            >
              <StyledText className="text-white font-bold text-lg">
                {isLoading ? 'Logging in...' : 'Login'}
              </StyledText>
            </StyledTouchableOpacity>

            <StyledView className="flex-row justify-center mt-6">
              <StyledText className="text-gray-300">Don't have an account? </StyledText>
              <StyledTouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <StyledText className="text-indigo-400 font-bold">Sign up</StyledText>
              </StyledTouchableOpacity>
            </StyledView>
          </StyledScrollView>
        </StyledLinearGradient>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default Login;