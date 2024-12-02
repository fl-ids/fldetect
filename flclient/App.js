import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import IntrusionDetection from './components/Landing';
import HelpComponent from './components/FAQ/faq';
import FederatedLearningDashboard from './components/TrainingDash'
import SettingPage from './components/Settings/Settings'

import NotificationHandler from './components/NotificationHandler';
import PushNotificationService from './services/PushNotificationService';

import DetectionDashboard from './components/DetectionDash';



import HomeScreen from './components/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#1a202c',
    card: '#2d3748',
    text: 'white',
    border: '#4a5568',
  },
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Help') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4c51bf',
        tabBarInactiveTintColor: '#718096',
        tabBarStyle: { backgroundColor: '#2d3748', borderTopColor: '#4a5568' },
        headerStyle: { backgroundColor: '#2d3748' },
        headerTintColor: 'white',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={FederatedLearningDashboard} />
      <Tab.Screen name="Help" component={HelpComponent} />
      <Tab.Screen name="Me" component={SettingPage} />
    </Tab.Navigator>
  );
}

export default function App() {

  React.useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    const token = await PushNotificationService.registerForPushNotificationsAsync();
    if (token) {
      await PushNotificationService.sendTokenToServer(token);
    }
  };


  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyDarkTheme}>
        <Stack.Navigator 
          initialRouteName="flclient"
          screenOptions={{
            headerStyle: { backgroundColor: '#2d3748' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen 
            name="flclient" 
            component={IntrusionDetection} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetectionDashboard"
            component={DetectionDashboard}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}