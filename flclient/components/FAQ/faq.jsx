import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { faqData } from '../constants';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledLinearGradient = styled(LinearGradient);



const FAQItem = ({ item, isOpen, onToggle }) => (
  <StyledView className="mb-4">
    <StyledTouchableOpacity 
      onPress={onToggle}
      className="flex-row justify-between items-center bg-gray-800 p-4 rounded-t-xl"
    >
      <StyledText className="text-white font-semibold flex-1">{item.question}</StyledText>
      <MaterialCommunityIcons 
        name={isOpen ? "chevron-up" : "chevron-down"} 
        size={24} 
        color="white" 
      />
    </StyledTouchableOpacity>
    {isOpen && (
      <StyledView className="bg-gray-700 p-4 rounded-b-xl">
        <StyledText className="text-gray-300">{item.answer}</StyledText>
      </StyledView>
    )}
  </StyledView>
);

const HelpComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQs, setOpenFAQs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({...prev, [index]: !prev[index]}));
  };

  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledLinearGradient
      colors={['#1a202c', '#2d3748']}
      className="flex-1"
    >
      <StyledScrollView className="flex-1 p-6">
        <StyledText className="text-3xl font-bold text-white mb-6">Help Center</StyledText>
        
        {/* Search Bar */}
        <StyledView className="mb-6">
          <StyledTextInput
            className="bg-gray-800 text-white p-4 rounded-xl"
            placeholder="Search FAQs..."
            placeholderTextColor="#718096"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </StyledView>
        
        {/* Support Options */}
        <StyledView className="flex-row justify-between mb-6">
          <StyledTouchableOpacity 
            className="bg-blue-600 rounded-xl p-4 w-[48%]"
            onPress={() => console.log('Email Support')}
          >
            <MaterialCommunityIcons name="email-outline" size={24} color="white" />
            <StyledText className="text-white font-semibold mt-2">Email Us</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity 
            className="bg-green-600 rounded-xl p-4 w-[48%]"
            onPress={() => console.log('Chat Support')}
          >
            <MaterialCommunityIcons name="chat-outline" size={24} color="white" />
            <StyledText className="text-white font-semibold mt-2">Chat with Us</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
        
        {/* FAQ Section */}
        <StyledText className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</StyledText>
        {filteredFAQs.map((item, index) => (
          <FAQItem 
            key={index}
            item={item} 
            isOpen={openFAQs[index]}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </StyledScrollView>
    </StyledLinearGradient>
  );
};

export default HelpComponent;