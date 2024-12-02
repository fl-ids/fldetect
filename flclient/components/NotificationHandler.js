import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

import TrainingService from '../services/TrainingServices';

function NotificationHandler() {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
      const data = response.notification.request.content.data;
      if (data.type === 'start_training') {
        handleStartTraining(data);
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleStartTraining = async (data) => {
    // Here you would implement the logic to start the training process
    console.log("Starting training with data:", data);
    // await TrainingService.startTraining(data);
  };

  return null;
}

export default NotificationHandler;
