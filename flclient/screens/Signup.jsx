import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView, SafeAreaView, Animated, Dimensions } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledLinearGradient = styled(LinearGradient);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);

const { width } = Dimensions.get('window');

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      shakeForm();
      return;
    }

    if (!emailRegex.test(email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Login');
    }, 2000);
  };

  const shakeForm = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const InputField = ({ icon, placeholder, value, onChangeText, secureTextEntry }) => (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <StyledView className="flex-row items-center bg-gray-700 rounded-xl p-4 mb-4">
        <MaterialCommunityIcons name={icon} size={24} color="#a0aec0" />
        <StyledTextInput
          className="flex-1 ml-3 text-white"
          placeholder={placeholder}
          placeholderTextColor="#a0aec0"
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </StyledView>
    </Animated.View>
  );

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
            <Animated.View style={{ opacity: fadeAnim }}>
              <StyledView className="mb-12 items-center">
                <StyledView className="w-24 h-24 bg-indigo-500 rounded-full mb-4 justify-center items-center">
                  <MaterialCommunityIcons name="account-plus" size={48} color="white" />
                </StyledView>
                <StyledText className="text-4xl font-bold text-white mb-2">Join Us</StyledText>
                <StyledText className="text-gray-300 text-lg">Create your account</StyledText>
              </StyledView>

              <InputField 
                icon="email-outline" 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
              />
              <InputField 
                icon="lock-outline" 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
              />
              <InputField 
                icon="lock-check-outline" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry 
              />

              <StyledTouchableOpacity
                className="bg-indigo-600 rounded-xl p-4 items-center mb-4"
                onPress={handleSignup}
                disabled={isLoading}
              >
                <StyledText className="text-white font-bold text-lg">
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </StyledText>
              </StyledTouchableOpacity>

              <StyledView className="flex-row justify-center">
                <StyledText className="text-gray-300">Already have an account? </StyledText>
                <StyledTouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <StyledText className="text-indigo-400 font-bold">Log in</StyledText>
                </StyledTouchableOpacity>
              </StyledView>
            </Animated.View>
          </StyledScrollView>
        </StyledLinearGradient>
      </KeyboardAvoidingView>
    </StyledSafeAreaView>
  );
};

export default Signup;